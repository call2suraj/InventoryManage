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
            <Text style={{margin:8, color:'black', fontSize:15, width:100}}>Type</Text>
        <Picker
            selectedValue={this.state.language}
            style={{ height: 30, width: width-130, marginLeft:20,marginTop:2 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Schedule" value="Schedule" />
            <Picker.Item label="Current" value="Current" />
        </Picker>
        </View>
    );
  }
}