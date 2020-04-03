import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ActionSheet from 'react-native-actionsheet';

import { Styles } from '../../global/constants';
import { provinceData, ageData } from '../../global';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      province: 'प्रदेश १',
      district: 'भोजपुर',
      ageGroup: '१०-१९',
    };
  }

  handleSubmit = () => {
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      if (name.trim() === '') {
        console.warn('Enter name ');
      } else {
        console.warn('Enter mobile ');
      }
    } else {
      this.props.navigation.navigate('homePage');
    }
  };

  handleActionSheetClick = (index, type, data) => {
    switch (type) {
      case 'province':
        this.setState({ province: data[index].province, district: data[index].districts[0] });
        break;
      case 'district':
        this.setState({ district: data[index] });
        break;
      case 'ageGroup':
        this.setState({ ageGroup: data[index] });
        break;

      default:
        break;
    }
  };

  render() {
    const { name, number, province, district, ageGroup } = this.state;
    const contentContainerStyle = [s.bgTheme, s.pt24, s.flex1];
    const headerStyle = [s.colorWhite, s.fontBold, s.selfCenter];
    const contentStyle = [s.bgLighter, s.flex1, s.p12, s.mt24, s.radiusTop32, s.wFull];
    const labelStyle = [s.colorTheme, s.fontSemibold, s.py8, s.font18];
    const inputStyle = [s.bgLightTheme, s.radius6, s.h48, s.mb8, s.justifyCenter, s.p8];
    const provinceValues = provinceData.map(each => {
      return each.province;
    });
    const districts = provinceData.filter(each => each.province === province) || [];
    const selectedDistrict = districts[0].districts;

    return (
      <View style={contentContainerStyle}>
        <Text style={headerStyle}>कृपया आफ्नो जानकारी दिनुहोस ।</Text>
        <ScrollView contentContainerStyle={contentStyle}>
          <Text style={labelStyle}> नाम </Text>
          <TextInput
            style={inputStyle}
            placeholderTextColor="#D8D8D8"
            autoCorrect={false}
            value={name}
            onChangeText={text => this.setState({ name: text })}
          />
          <Text style={labelStyle}> मोबाइल नम्बर </Text>
          <TextInput
            style={inputStyle}
            placeholderTextColor="#D8D8D8"
            autoCorrect={false}
            value={number}
            onChangeText={text => this.setState({ number: text })}
          />
          <Text style={labelStyle}> ठेगाना </Text>
          <TouchableOpacity onPress={() => this.provinceSheet.show()} style={inputStyle}>
            <Text style={[s.justifyCenter]}>{province}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.districtSheet.show()} style={inputStyle}>
            <Text style={[s.justifyCenter]}>{district}</Text>
          </TouchableOpacity>
          <View>
            <ActionSheet
              options={provinceValues}
              onPress={index => this.handleActionSheetClick(index, 'province', provinceData)}
              ref={ref => {
                this.provinceSheet = ref;
              }}
            />
            <ActionSheet
              options={selectedDistrict}
              onPress={index => this.handleActionSheetClick(index, 'district', selectedDistrict)}
              ref={ref => {
                this.districtSheet = ref;
              }}
            />
            <ActionSheet
              options={ageData}
              onPress={index => this.handleActionSheetClick(index, 'ageGroup', ageData)}
              ref={ref => {
                this.ageSheet = ref;
              }}
            />
          </View>
          <Text style={labelStyle}> उमेर </Text>
          <TouchableOpacity onPress={() => this.ageSheet.show()} style={inputStyle}>
            <Text style={[s.justifyCenter]}>{ageGroup}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.p12, s.my16, s.radius6, s.itemsCenter, s.justifyCenter, s.bgTheme]}
            onPress={this.handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const s = StyleSheet.create({
  ...Styles,
});

export default Profile;
