import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Styles } from '../../global';

export default class UnderConstruction extends Component {
  render() {
    return (
      <View style={[s.justifyCenter, s.itemsCenter, s.flex1]}>
        <Text> Page Under Construction </Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});
