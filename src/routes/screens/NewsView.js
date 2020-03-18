import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { ImageView, Styles, categories, TimeView, SearchBar, VideoView, news } from '../../global';

class NewsView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item').title,
    };
  };
  render() {
    const { link } = this.props.navigation.getParam('item');
    const newsStyle = [s.py8, s.pl16, s.mb4];
    const newsContentTextStyle = [s.fontBold, s.font16, s.mb8];

    return (
      <View style={[s.flex1]}>
        <WebView
          source={{ uri: link }}
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
