import React, { Component } from 'react';
import {Text, View, StyleSheet,Picker,TextInput,Image,Button,ListView, TouchableOpacity,ScrollView,} from 'react-native';
import SearchPOC from './SearchPOC';
import axios from 'axios';
import { Container, Header, Content, Spinner } from 'native-base';
export default class LiveData extends Component{

  static navigationOptions = {
    title: 'PROCESSED',
    headerStyle:{ backgroundColor: 'red', paddingTop:20,marginBottom:2},
    headerTitleStyle:{ color: 'white'},
    height:160,

  };
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['C1234', 'C5678']),
      data:''

    };
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    axios.get('https://ns-idpovaimhn.now.sh/alert', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        AlertStatus: "all"
      }
    })
      .then((response) => {
        this.setState({data: response.data});
      })
      .catch(  (error) => {
        //const response = error.response
        console.log(response)
      })
  }

  
  onRowClick(){
    alert("onRowClick triggered");
  }
  render() {
   // this.getData();
    return (
      <ScrollView style={{marginBottom:1}}>
        {
          this.state.data != '' ? <SearchPOC buttonShow={false} passedData={this.state.data}/> :<View>
            <Spinner color='red' />
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  headerRight: {
    justifyContent:'flex-start',
    flexDirection:'row',
    borderWidth:1,
    paddingTop:25,
    flex: 1,
    margin:5,
    paddingLeft:0,

  },
  textStyle: {
    color:'black',
    fontSize:20,
    paddingTop:13,
    borderBottomWidth:0,
    borderColor:'#D1D1D1',

  }

});
