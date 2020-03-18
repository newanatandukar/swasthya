import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ExpandableTab, diseases } from '../../global';

class Diseases extends Component {
  renderCategories = ({ item }) => <ExpandableTab title={item.heading} data={item.content} />;

  render() {
    return (
      <FlatList data={diseases} renderItem={this.renderCategories} keyExtractor={item => item.id} />
    );
  }
}

export default Diseases;
