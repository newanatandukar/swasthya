import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ExpandableTab, childHealth } from '../../global';

class ChildHealth extends Component {
  renderCategories = ({ item }) => <ExpandableTab title={item.heading} data={item.content} />;

  render() {
    return (
      <FlatList
        data={childHealth}
        renderItem={this.renderCategories}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default ChildHealth;
