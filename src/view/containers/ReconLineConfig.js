import React, { Component } from 'react';
import {Text, View, StyleSheet,Picker,TextInput,Image,ListView, TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import SearchPOC from '../components/SearchPOC';
import axios from 'axios';
import HamMenu from '../components/HamMenu';
import AddLinePopup from '../components/AddLinePopup';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Drawer, Content, Card, CardItem, ListItem,
    Form, Item, Input, Label, CheckBox,
} from 'native-base';
const { width, height } = Dimensions.get('window');

export default class ReconLineConfig extends Component{

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

  openPopup = () => {
   alert("clicked")
  };

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
        <Container>
                <Header>
                    <Left>
                        <Button transparent >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body style={{ width: 266, marginLeft: 0 }}>
                        <Title style={{ fontSize: 14, width: 206, marginLeft: 0 }}>Recon Line Configuration</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <HamMenu />
                        </Button>
                    </Right>
                </Header>

      <ScrollView style={{marginBottom:1}}>
      <View>
     
      <AddLinePopup />
      </View>
        {
          this.state.data != '' ? <SearchPOC buttonShow={false} passedData={this.state.data}/> :<View></View>
        }
      </ScrollView>

       </Container>
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
