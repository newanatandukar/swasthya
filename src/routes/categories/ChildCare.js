import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ExpandableTab, childCare } from '../../global';

class ChildCare extends Component {
  renderCategories = ({ item }) => <ExpandableTab title={item.heading} data={item.content} />;

  render() {
    return (
      <FlatList
        data={childCare}
        renderItem={this.renderCategories}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default ChildCare;
