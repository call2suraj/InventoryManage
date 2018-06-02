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
export default class ReconName extends Component {
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
            <Text style={{margin:10, color:'black', fontSize:15, width:100}}>Recon Name</Text>
        <Picker
            selectedValue={this.state.language}
            style={{width: width-138, margin:0,marginTop:0 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="USA Cost Recon - Walmart GM" value="USA" />
            <Picker.Item label="UK Cost Recon - Walmart GM" value="UK" />
            <Picker.Item label="Mx Cost Recon - Walmart GM" value="MX" />
            <Picker.Item label="India Cost Recon - Walmart GM" value="IN" />
            <Picker.Item label="Canada Cost Recon - Walmart GM" value="CA" />
        </Picker>
        </View>
    );
  }
}