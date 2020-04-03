import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import YouTube from 'react-native-youtube';

import { Styles } from '../../global';

class VideoView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item').title,
    };
  };

  render() {
    const viewStyle = [s.flex1, s.overflowHidden];
    const { link } = this.props.navigation.getParam('item');

    return (
      <View style={viewStyle}>
        {/* <Text>{link}</Text> */}
        {/* <YouTube
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: 'stretch', height: 300 }}
        /> */}
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default VideoView;
