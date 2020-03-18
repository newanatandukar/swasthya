import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Audio, Video } from 'expo-av';

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
        <Video
          source={{ uri: `http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4` }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping={false}
          useNativeControls
          orientation="landscape"
          style={[s.wScreen, { height: 300 }]}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default VideoView;
