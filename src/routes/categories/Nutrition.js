import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ExpandableTab, nutrition } from '../../global';

class Nutrition extends Component {
  renderCategories = ({ item }) => <ExpandableTab title={item.heading} data={item.content} />;

  render() {
    return (
      <FlatList
        data={nutrition}
        renderItem={this.renderCategories}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default Nutrition;
