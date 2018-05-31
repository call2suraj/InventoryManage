import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  StatusBar

} from 'react-native';

import {
  Container, Header, Left, Body, Right, Button, Icon,
  Title, Drawer, Content, Card, CardItem, ListItem,
  Form, Item, Input, Label, Picker, CheckBox
} from 'native-base';
import SideBar from '../components/SideBar';
import HamMenu from '../components/HamMenu';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      selected1: "key0",
      checked: false
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  static navigationOptions = {
    header: null
  };


  onValueChange(value) {
    this.setState({
      selected1: value,
      username:'',
      password:'',
      Uerror:false,
      Perror:false
    });
  }

  handleCheckbox() {
    this.setState({ checked: !this.state.checked });
  }

  onLogin(){
    this.setState({ Uerror: false, Perror: false})
    if(this.state.username == 'ninja' && this.state.password == 'ninja')
    {
      //alert("true");
      this.props.navigation.navigate('Landing');
    }else{

      if(this.state.username =='' ){
        this.setState({ Uerror: true})

      }
      if( this.state.password==''){
        this.setState({ Perror: true})

      }
      if(this.state.username !='' && this.state.password !=''){
        this.setState({ Uerror: true, Perror: true })
      }

    }
  }

  render() {

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };


    return (




      <Container>
        <Header>
          <Left>
            
          </Left>
          <Body style={{ width: 266, marginLeft: 0 }}>
            <Title style={{ fontSize: 14, width: 206, marginLeft: 0 }}>Inventory Management System</Title>
          </Body>
          <Right>
            <Button transparent>
              <HamMenu />
            </Button>
          </Right>
        </Header>




        <Container>

          <Content>
            <Form>
              <Item floatingLabel error={this.state.Uerror}>
                <Label>Username </Label>
                <Input  onChangeText={ (text) => this.setState({ username: text }) }/>
              </Item>
              <Item floatingLabel  error={this.state.Perror}>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText={ (text) => this.setState({ password: text }) }/>
              </Item>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 16, paddingTop: 9, margin: 5, paddingLeft: 10 }}>Domain</Text>
                <Content>
                  <Picker
                    iosHeader="Select one"
                    mode="dropdown"
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this)} iosHeader='domain'
                  >
                    <Item label="AR" value="key0" />
                    <Item label="BR" value="key1" />
                    <Item label="CA" value="key2" />
                    <Item label="CN" value="key3" />
                    <Item label="CR" value="key4" />
                    <Item label="Home Office" value="key5" />
                    <Item label="MX" value="key6" />
                  </Picker>
                </Content>
              </View>

              <ListItem>
                <CheckBox checked={this.state.checked} onPress={this.handleCheckbox} />
                <Body style={{ marginLeft: 10,}}>
                  <Text>Remember Me</Text>
                </Body>
              </ListItem>

              <Button full success style={{ margin: 15, alignItems: 'center', marginTop: 44 }} onPress={this.onLogin}>
                <Text style={{ textAlign: 'center', paddingLeft: 5, marginLeft: 11, color: 'white' }}>LOGIN</Text>
               
              </Button>
            </Form>
          </Content>
        </Container>

      </Container>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    flexDirection: 'column',
    marginTop: 0,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: 'white'
  },

});
