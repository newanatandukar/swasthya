import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import firebase from 'react-native-firebase';

import AppContainer from './src/AppContainer';
import { Styles } from './src/global';

class App extends Component {
  componentDidMount() {
    this.initializeNotifications();
  }

  async initializeNotifications() {
    try {
      firebase.notifications().setBadge(0);
      const enabled = await firebase.messaging().hasPermission();
      if (!enabled) {
        try {
          await firebase.messaging().requestPermission();
        } catch (e) {
          alert('Please enable app notifications.');
          return;
        }
      }
    } catch (e) {
      return;
    }

    try {
      const fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log('got fcm token', fcmToken);
      }
    } catch (e) {
      return;
    }

    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(token => {
      console.log('refreshed fcm token', token);
    });

    this.notificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed(async notification => {
        const {
          data: { title },
        } = notification;

        console.log('notificationDisplayedListener', notification);
      });

    this.notificationListener = firebase.notifications().onNotification(notification => {
      const { title, body, data, subtitle, notificationId, ios } = notification;

      const channel = new firebase.notifications.Android.Channel(
        'app-notifications',
        'App Notifications',
        firebase.notifications.Android.Importance.High,
      ).setDescription('In-app notifications');

      firebase.notifications().android.createChannel(channel);
      console.log('notification', notification);
      // if (Platform.OS === 'android') {
      //   const localNotification = new firebase.notifications.Notification({
      //     sound: 'default',
      //     show_in_foreground: true,
      //   })
      //     .setNotificationId(notificationId)
      //     .setTitle(title)
      //     .setSubtitle(subtitle)
      //     .setBody(body)
      //     .setData(data)
      //     .android.setChannelId('app-notifications') // e.g. the id you chose above
      //     .android.setSmallIcon('ic_stat_notification') // create this icon in Android Studio
      //     .android.setColor('#000000') // you can set a color here
      //     .android.setPriority(firebase.notifications.Android.Priority.High);

      //   firebase
      //     .notifications()
      //     .displayNotification(localNotification)
      //     .catch(err => console.error('err', err));
      // } else if (Platform.OS === 'ios') {
      //   const localNotification = new firebase.notifications.Notification()
      //     .setNotificationId(notificationId)
      //     .setTitle(title)
      //     .setSubtitle(subtitle)
      //     .setBody(body)
      //     .setData(data)
      //     .ios.setBadge(ios.badge);
      //   firebase
      //     .notifications()
      //     .displayNotification(localNotification)
      //     .catch(err => console.error('err', err));
      // }
    });

    this.messageListener = firebase.messaging().onMessage(message => {
      // Store.dispatch(listLocationsRequest({ message }));
      console.log(JSON.stringify(message));
    });

    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(async notificationOpen => {
        const {
          data: { title },
        } = notificationOpen.notification;
        console.log('notificationOpen', notificationOpen);
      });
  }

  render() {
    if (Platform.OS === 'android') {
      return <AppContainer />;
    }
    return (
      <SafeAreaView style={s.flex1}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default App;
