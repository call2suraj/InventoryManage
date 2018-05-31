import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    StatusBar,
    Picker,
    Dimensions

} from 'react-native';
const { width, height } = Dimensions.get('window');
export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:''
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
        <View style={{flexDirection:'row', marginTop:5}}>
            <Text style={{margin:8, color:'black', fontSize:15, width:100}}>Country</Text>
        <Picker
            selectedValue={this.state.language}
            style={{ height: 30, width: width-130, marginLeft:20,marginTop:2 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="United State" value="USA" />
            <Picker.Item label="United Kingdom" value="UK" />
            <Picker.Item label="Mexico" value="MX" />
            <Picker.Item label="India" value="IN" />
            <Picker.Item label="Canada" value="CA" />
        </Picker>
        </View>
    );
  }
}