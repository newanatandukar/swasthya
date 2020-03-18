import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import AppContainer from './src/AppContainer';
import {Styles} from './src/global';

class App extends Component {
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
