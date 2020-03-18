import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ExpandableTab, femaleHealthVolunteers } from '../../global';

class FemaleHealthVolunteers extends Component {
  renderCategories = ({ item }) => <ExpandableTab title={item.heading} data={item.content} />;

  render() {
    return (
      <FlatList
        data={femaleHealthVolunteers}
        renderItem={this.renderCategories}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default FemaleHealthVolunteers;
