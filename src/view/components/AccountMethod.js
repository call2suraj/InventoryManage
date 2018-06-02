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
export default class AccountMethod extends Component {
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
            <Text style={{margin:10, color:'black', fontSize:15, width:100, paddingTop:4}}>Recon Method</Text>
        <Picker
            selectedValue={this.state.language}
            style={{ width: width-138, margin:0,marginTop:0 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
           <Picker.Item label="Cost" value="Cost" />
            <Picker.Item label="Retail" value="Retail" />
            <Picker.Item label="Margin" value="Margin" />
        </Picker>
        </View>


    );
  }
}