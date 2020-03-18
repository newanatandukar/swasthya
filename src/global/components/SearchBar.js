import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { Styles } from '../constants';

const SearchBar = props => {
  const { viewStyle, textStyle } = props;
  const [value, onChangeText] = React.useState();

  return (
    <View style={viewStyle}>
      <Icon name="search" color="#7379A5" />
      <TextInput
        style={textStyle}
        placeholder="खोजि गर्नुहोस्"
        placeholderTextColor="#7379A5"
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const s = StyleSheet.create({
  ...Styles,
});

SearchBar.propTypes = {
  viewStyle: PropTypes.any,
  textStyle: PropTypes.any,
};

SearchBar.defaultProps = {
  viewStyle: [
    s.row,
    s.bgLightTheme,
    s.border1,
    s.borderTransparent,
    s.radius8,
    s.mx16,
    s.p12,
    s.itemsCenter,
  ],
  textStyle: [s.colorBlack, s.font14, s.ml8],
};

export default SearchBar;
