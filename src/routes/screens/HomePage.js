import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ImageView,
  Styles,
  TimeView,
  SearchBar,
  Thumbnail,
  TextTicker,
  categories,
  campaigns,
  quickLinks,
  news,
  videos,
} from '../../global';

class HomePage extends Component {
  renderCategories = ({ item }) => {
    const viewStyle = [
      s.justifyCenter,
      s.itemsCenter,
      s.border1,
      s.shadow3,
      s.borderTransparent,
      s.overflowHidden,
      s.bgWhite,
      s.radius8,
      s.mx4,
    ];
    const imageStyle = { width: 150, height: 150 };
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(item.toScreen)}
        style={viewStyle}>
        <Image source={item.image} style={imageStyle} resizeMode="contain" resizeMethod="scale" />
      </TouchableOpacity>
    );
  };

  renderNews = ({ item }) => {
    const viewStyle = [
      s.justifyCenter,
      s.itemsCenter,
      s.border1,
      s.shadow3,
      s.borderTransparent,
      s.overflowHidden,
      s.bgWhite,
      s.radius8,
      s.mx4,
      s.p8,
      { width: 150 },
    ];
    const imageStyle = { width: 100, height: 100 };

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('newsView', { item })}
        style={viewStyle}>
        <Image source={item.image} style={imageStyle} resizeMode="contain" resizeMethod="scale" />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  renderCampaigns = ({ item }) => {
    const viewStyle = [
      s.justifyCenter,
      s.itemsCenter,
      s.border1,
      s.shadow3,
      s.borderTransparent,
      s.overflowHidden,
      s.bgLightTheme,
      s.radius8,
      s.mx4,
      s.p8,
      { width: 128, height: 128 },
    ];
    const textStyle = [s.selfCenter, s.mt12, s.colorTheme, s.fontBold, s.font16];

    return (
      <View style={viewStyle}>
        <Icon name={item.icon} size={28} color="#DA5289" />
        <Text style={textStyle} textBreakStrategy="highQuality">
          {item.title}
        </Text>
      </View>
    );
  };

  renderQuickLinks = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(item.link)}
        style={[
          s.flex1,
          s.bgLightTheme,
          s.p8,
          s.m4,
          s.radius6,
          s.row,
          s.itemsCenter,
          s.overflowHidden,
        ]}>
        <View style={[s.bgDarkTheme, s.p4, s.radius6]}>
          <Icon name={item.icon} size={28} color="#3276B3" />
        </View>
        <Text textBreakStrategy="highQuality" style={[s.px4]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  renderVideos = ({ item }) => {
    return (
      <Thumbnail
        showPlayIcon
        url={item.link}
        containerStyle={[s.shadow, s.m4, s.radius6, s.itemsCenter, s.overflowHidden, s.flex1]}
        imageHeight={120}
        onPress={() => this.props.navigation.navigate('videoView', { item })}
      />
    );
  };

  render() {
    const contentStyle = [s.bgLighter, s.flex1, s.pt4, s.radiusTop32];
    const categoryStyle = [s.py8, s.pl16, s.my8];
    const xMarginStyle = [s.py8, s.px16, s.my8];
    const categoryContentTextStyle = [s.fontBold, s.font16, s.mb8];
    const marqueeStyle = [s.justifyCenter, s.itemsCenter, s.px4, s.bgLightSecTheme, s.py12, s.mt8];
    const marqueeTextStyle = [s.secondaryTheme];

    const a = 'https://www.nepalihealth.com/feed/';
    return (
      <ScrollView contentContainerStyle={[s.bgTheme]}>
        <TimeView />
        <View style={contentStyle}>
          <ImageView style={[s.flex1]} />
          <View style={marqueeStyle}>
            <TextTicker
              style={marqueeTextStyle}
              duration={10000}
              loop
              scroll
              animationType="scroll"
              marqueeOnMount
              scrollSpeed={100}
              repeatSpacer={50}
              marqueeDelay={1000}>
              कसरी आफ्नो बच्चको रोगसँग बच्ने क्षमता बढाउन सकिन्छ ? लोरेम इप्सुम दोलोर सित ....
            </TextTicker>
          </View>
          <View style={categoryStyle}>
            <Text style={categoryContentTextStyle}>Content Book</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={this.renderCategories}
            />
          </View>
          <SearchBar />
          <View style={xMarginStyle}>
            <Text style={categoryContentTextStyle}>Quick Links</Text>
            <FlatList
              data={quickLinks}
              renderItem={this.renderQuickLinks}
              numColumns={2}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={categoryStyle}>
            <Text style={categoryContentTextStyle}>Running Campaigns</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={campaigns}
              renderItem={this.renderCampaigns}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={categoryStyle}>
            <Text style={categoryContentTextStyle}>News</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={news}
              renderItem={this.renderNews}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={xMarginStyle}>
            <Text style={categoryContentTextStyle}>Videos</Text>
            <FlatList
              data={videos}
              numColumns={2}
              renderItem={this.renderVideos}
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
