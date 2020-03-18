import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ExpandableTab, std } from '../../global';

class STD extends Component {
  renderCategories = ({ item }) => <ExpandableTab title={item.heading} data={item.content} />;

  render() {
    return (
      <FlatList data={std} renderItem={this.renderCategories} keyExtractor={item => item.id} />
    );
  }
}

export default STD;
