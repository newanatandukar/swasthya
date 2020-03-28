import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { Styles } from '../../global';

class NewsView extends Component {
  render() {
    const { id } = this.props.navigation.getParam('item');

    return (
      <View style={[s.flex1]}>
        <WebView
          source={{ uri: id }}
          style={{ marginTop: 20 }}
          domStorageEnabled={true}
          sharedCookiesEnabled={true}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default NewsView;
