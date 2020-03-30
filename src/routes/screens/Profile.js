import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native';

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
    const { name, number, province, district } = this.state;
    console.log(province, district);
    if (name.trim() === '' || number.trim() === '') {
      if (name.trim() === '') {
        console.warn('Enter name ');
      } else {
        console.warn('Enter age ');
      }
    } else {
      this.props.navigation.navigate('homePage');
    }
  };

  render() {
    const { name, number, province, district, ageGroup } = this.state;
    const contentContainerStyle = [s.bgTheme, s.pt24, s.flex1];
    const headerStyle = [s.colorWhite, s.fontBold, s.selfCenter];
    const contentStyle = [s.bgLighter, s.flex1, s.p12, s.mt24, s.radiusTop32, s.wFull];
    const labelStyle = [s.colorTheme, s.fontSemibold, s.py8, s.font18];
    const inputStyle = [s.bgLightTheme, s.radius6, s.h48, s.mb8];
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
          <Picker
            selectedValue={province}
            style={inputStyle}
            onValueChange={itemValue => this.setState({ province: itemValue })}>
            {provinceValues.map(each => (
              <Picker.Item key={each} label={each} value={each} />
            ))}
          </Picker>
          <Picker
            selectedValue={district}
            style={inputStyle}
            onValueChange={itemValue => this.setState({ district: itemValue })}>
            {selectedDistrict.map(each => (
              <Picker.Item key={each} label={each} value={each} />
            ))}
          </Picker>
          <Text style={labelStyle}> उमेर </Text>
          <Picker
            selectedValue={ageGroup}
            style={inputStyle}
            onValueChange={itemValue => this.setState({ ageGroup: itemValue })}>
            {ageData.map(each => (
              <Picker.Item key={each} label={each} value={each} />
            ))}
          </Picker>
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
