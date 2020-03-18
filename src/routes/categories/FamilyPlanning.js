import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ExpandableTab, familyPlanning } from '../../global';

class FamilyPlanning extends Component {
  renderCategories = ({ item }) => <ExpandableTab title={item.heading} data={item.content} />;

  render() {
    return (
      <FlatList
        data={familyPlanning}
        renderItem={this.renderCategories}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default FamilyPlanning;
