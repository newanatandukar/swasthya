import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  ImageBackground,
  Image,
  ViewPropTypes,
  Dimensions,
  Linking,
  StyleSheet,
  View,
} from 'react-native';

import { Styles, Images } from '../constants';

const DEFAULT_WIDTH = Dimensions.get('window').width;
const TYPES = {
  default: 'default',
  high: 'hqdefault',
  medium: 'mqdefault',
  standard: 'sddefault',
  maximum: 'maxresdefault',
};

getVideoId = url => {
  const result = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  const videoIdWithParams = result[2];

  if (videoIdWithParams !== undefined) {
    const cleanVideoId = videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

    return cleanVideoId;
  }

  return null;
};

class Thumbnail extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      videoId: getVideoId(props.url),
    };
  }

  static propTypes = {
    ...ImageBackground.propTypes,
    children: PropTypes.node,
    containerStyle: ViewPropTypes.style,
    imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imageWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    iconStyle: Image.propTypes.style,
    iconTintColor: Image.propTypes.style,
    onPress: PropTypes.func,
    onPressError: PropTypes.func,
    style: ViewPropTypes.style,
    type: PropTypes.oneOf(Object.keys(TYPES)),
    url: PropTypes.string.isRequired,
    showPlayIcon: PropTypes.bool,
  };

  static defaultProps = {
    type: 'high',
    imageHeight: 200,
    imageWidth: DEFAULT_WIDTH,
    onPressError: () => {},
    iconTintColor: { tintColor: '#FFF' },
    showPlayIcon: true,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const videoId = getVideoId(nextProps.url);

    if (videoId !== prevState.videoId) {
      return { videoId };
    }

    return null;
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (this.props.url === nextProps.url || !nextProps.url) {
      return;
    }

    this.setState({
      videoId: getVideoId(nextProps.url),
    });
  }

  getType = () => TYPES[this.props.type];

  onPress = () => {
    const { url, onPress, onPressError } = this.props;

    if (onPress) {
      return onPress(url);
    }

    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          return;
        }

        return Linking.openURL(url);
      })
      .catch(onPressError);
  };

  render() {
    const { videoId } = this.state;

    if (!videoId) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Invalid "url" could not extract videoId from "${this.props.url}"`);
      }

      return null;
    }

    const {
      imageWidth,
      imageHeight,
      containerStyle,
      iconStyle,
      children,
      showPlayIcon,
      iconTintColor,
      ...props
    } = this.props;

    const imageURL = `https://img.youtube.com/vi/${videoId}/${this.getType()}.jpg`;
    const imageContainerStyle = [
      {
        width: imageWidth,
        height: imageHeight,
      },
    ];
    const playIconStyle = [iconTintColor, iconStyle];

    return (
      <TouchableOpacity activeOpacity={0.7} style={containerStyle} onPress={this.onPress}>
        <ImageBackground
          source={{ uri: imageURL }}
          style={imageContainerStyle}
          resizeMode="center"
          resizeMethod="scale"
          testId="thumbnail-image-background"
          {...props}>
          <View
            style={[
              s.flex1,
              { backgroundColor: '#000' },
              s.opacity25,
              s.justifyCenter,
              s.itemsCenter,
            ]}>
            {showPlayIcon ? (
              <Image source={Images.PLAY} style={playIconStyle} testId="thumbnail-image" />
            ) : null}

            {children}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default Thumbnail;

const s = StyleSheet.create({
  playIcon: {},
  ...Styles,
});
