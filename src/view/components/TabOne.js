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
    Dimensions,
    TextInput,
    ScrollView
} from 'react-native';
import Country from './Country';
import Banner from './Banner';

import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Drawer, Content, Card, CardItem, ListItem,
    Form, Item, Input, Label, CheckBox
} from 'native-base';
import MockData from './MockData';
import DatePicker from 'react-native-datepicker'
export default class TabOne extends Component {
  constructor() {
    super();

    this.state = {
        date: "2016-05-15"
    };
  }
onClick(){
    console.log("onClick");
}
  static navigationOptions = ({ navigation, screenProps }) => ({

    title:  'RETAIL',
    headerStyle:{backgroundColor:'#3f51b5', height:88,paddingTop:1},
    headerTitleStyle:{ color: 'white',fontSize:15},
    headerLeft: <View style={{paddingRight:33, paddingTop:1,borderWidth:0}}>
      <View>
        <View>
          <Icon name='arrow-back' size={24}
                onPress={ () => { navigation.goBack() }} style={styles.iconStyleLeft}/>
        </View>
      </View>
    </View>,
    headerRight:  <View style={styles.headerRight}>
      <Icon name={'search'} size={25}
            style={styles.iconStyleRight}/>
    </View>,
  });

  render() {
    return (
    

       <Container>
                

                <View>

                    <Country />
                </View>

                <View>

                    <Banner />
                </View>

                 <View style={{ flexDirection: 'row' }}>
                    <Text style={{ margin: 8, color: 'black', fontSize: 15,  marginBottom: 10 }}>Fiscal Year</Text>
                    <TextInput
                        style={{ margin: 5, height: 35, width: 260, borderColor: 'gray', borderWidth:1,marginBottom: 10, marginLeft: 50 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>


                <Card style={{ borderWidth: 2, margin:5, height:260 }}>     
                    <View style={{ flexDirection: 'row' }}>

                        <Item floatingLabel style={{ width: 170, marginLeft: 5 }}>
                            <Label style={{ fontSize: 15, }}>Line Name</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={{ width: 220, marginLeft: 5 }}>
                            <Label style={{ fontSize: 15, }}>Cost</Label>
                            <Input />
                        </Item>

                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Item floatingLabel style={{ width: 170, marginLeft: 5 }}>
                            <Label style={{ fontSize: 15, }}>Retail</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={{ width: 220, marginLeft: 5, }}>
                            <Label style={{ fontSize: 15, }}>Location</Label>
                            <Input />
                        </Item>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Item floatingLabel style={{ width: 170, marginLeft: 5 }}>
                            <Label style={{ fontSize: 15, }}>Manager</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={{ width: 220, marginLeft: 5, }}>
                            <Label style={{ fontSize: 15, }}>Date</Label>
                            <Input />
                        </Item>
                    </View>
                    <Button full success style={{ margin: 2, alignItems: 'center', marginTop: 15}} onPress={this.onSave}>
                <Text style={{ textAlign: 'center', paddingLeft: 5, marginLeft: 11, color: 'white' }}>SAVE</Text>
               
              </Button>
                </Card>


                <ScrollView style={{ marginTop: 0 }}>
              <MockData />
            </ScrollView>

         </Container>

   
    );
  }
}

const styles = StyleSheet.create({
  container: {

    borderWidth:0,
    borderColor:'red',
    flexDirection: 'row',
    marginTop:0,
    marginLeft: 2,
    marginRight:2,
    backgroundColor: 'white'
  },
  headerRight: {
    justifyContent:'flex-start',
    flexDirection:'row',
    borderWidth:0,
    paddingTop:4,
    width:160,
    flex: 4
  },
  iconStyleRight:{
    paddingRight:3,
    textAlign:'right',
    paddingTop:28,
    color:'white',
    height:100,
    marginRight:5
  },
  iconStyleLeft: {
    paddingLeft:12,
    textAlign:'left',
    paddingBottom:6,
    marginRight:10,
    color:'white'
  }

});