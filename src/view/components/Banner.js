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
export default class Banner extends Component {
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
        <View style={{flexDirection:'row'}}>
            <Text style={{margin:8, color:'black', fontSize:15, width:100}}>Banner</Text>
        <Picker
            selectedValue={this.state.language}
            style={{ height: 30, width: width-130, marginLeft:20,marginTop:2 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="USA - SoftDiscount" value="USA" />
            <Picker.Item label="UK - SoftDiscount" value="UK" />
            <Picker.Item label="Mx - SoftDiscount" value="MX" />
            <Picker.Item label="In - SoftDiscount" value="IN" />
            <Picker.Item label="Ca - SoftDiscount" value="CA" />
        </Picker>
        </View>
    );
  }
}