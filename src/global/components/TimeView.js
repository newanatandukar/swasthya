import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ne';
import NepaliDate from 'nepali-date';

import { Styles } from '../constants';

const TimeView = props => {
  const { viewStyle, timeStyle, dateStyle } = props;

  return (
    <View style={viewStyle}>
      <Text style={dateStyle}> {new NepaliDate().format('ddd, mmmm d, yyyy')} </Text>
      <Text style={timeStyle}>
        {moment()
          .locale('ne')
          .format('hh:mm')}
      </Text>
    </View>
  );
};

const s = StyleSheet.create({
  ...Styles,
});

TimeView.propTypes = {
  viewStyle: PropTypes.any,
  timeStyle: PropTypes.any,
  dateStyle: PropTypes.any,
};

TimeView.defaultProps = {
  viewStyle: [s.p24, s.itemsCenter, s.justifyCenter],
  timeStyle: [s.fontBold, s.colorWhite],
  dateStyle: [s.fontBold, s.colorWhite, s.font18],
};

export default TimeView;
