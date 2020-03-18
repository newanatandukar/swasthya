import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Styles } from '../constants';

const TimeView = props => {
  const { viewStyle, textStyle } = props;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {moment().format('lll')} </Text>
    </View>
  );
};

const s = StyleSheet.create({
  ...Styles,
});

TimeView.propTypes = {
  viewStyle: PropTypes.any,
  textStyle: PropTypes.any,
};

TimeView.defaultProps = {
  viewStyle: [s.p24, s.itemsCenter, s.justifyCenter],
  textStyle: [s.fontBold, s.colorWhite],
};

export default TimeView;
