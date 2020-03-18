import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ExpandableTab, safeMotherhood } from '../../global';

class SafeMotherhood extends Component {
  renderCategories = ({ item }) => <ExpandableTab title={item.heading} data={item.content} />;

  render() {
    return (
      <FlatList
        data={safeMotherhood}
        renderItem={this.renderCategories}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default SafeMotherhood;
