import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

import { ImageView, Styles, categories, TimeView } from '../../global';

class HomePage extends Component {
  renderCategories = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate(item.toScreen)}
      style={[s.justifyCenter, s.itemsCenter, s.border1, s.mx2, s.shadow3, s.borderTransparent]}>
      <Image source={item.image} style={{ width: 150, height: 150 }} resizeMode="contain" />
    </TouchableOpacity>
  );

  render() {
    const contentStyle = [s.bgWhite, s.flex1, s.pt4, s.radiusTop32];

    return (
      <ScrollView style={[s.bgTheme]}>
        <TimeView />
        <View style={contentStyle}>
          <ImageView />
          <View>
            <FlatList
              horizontal
              data={categories}
              renderItem={this.renderCategories}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default HomePage;
