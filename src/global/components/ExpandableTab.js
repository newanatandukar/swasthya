import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Styles } from '../../global/constants';

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
  }

  render() {
    const { expanded } = this.state;
    const { title, data } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={[s.row, s.justifyBetween, s.h56, s.pl24, s.pr16, s.itemsCenter, s.bgLight]}
          onPress={() => this.toggleExpand()}>
          <View style={[s.flex1]}>
            <Text style={[s.font14, s.fontBold]}>{title}</Text>
          </View>
          <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
        </TouchableOpacity>
        <View style={[s.h1, s.colorWhite, s.wFull]} />
        {expanded && (
          <View style={[s.bgWhite, s.p16]}>
            <Text style={[s.font16]}>{data}</Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };
}

const s = StyleSheet.create({
  ...Styles,
});
