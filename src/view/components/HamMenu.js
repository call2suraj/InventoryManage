import React, { Component } from 'react';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  StatusBar

} from 'react-native';
import { Icon, Button } from 'native-base';
import Flag from 'react-native-round-flags';
export default class HamMenu extends React.PureComponent {
  setMenuRef = ref => {
    this.menu = ref;
  };

  menu = null;

  hideMenu = () => {
    this.menu.hide();
  };

  showMenu = () => {
    this.menu.show();
  };

  render() {
    return (


      <Menu
        ref={this.setMenuRef}
        button={<Icon name='settings' onPress={this.showMenu}></Icon>} style={{ marginLeft: 0 }} Icon="md-menu"
      >



        <View styel={{ flex: 1, flexDirection: 'column', }}>
          <Button transparent >
            <Flag code="US" style={{ width: 25, height: 25, marginLeft: 5 }} />
            <MenuItem onPress={this.hideMenu}>English-US</MenuItem>
          </Button>
        </View>

        <View styel={{ flex: 1, flexDirection: 'column', }}>
          <Button transparent >
            <Flag code="GB" style={{ width: 25, height: 25, marginLeft: 5 }} />
            <MenuItem onPress={this.hideMenu}>English-UK</MenuItem>
          </Button>
        </View>



        <View styel={{ flex: 1, flexDirection: 'column', }}>
          <Button transparent >
            <Flag code="CA" style={{ width: 25, height: 25, marginLeft: 5 }} />
            <MenuItem onPress={this.hideMenu}>French-Canada</MenuItem>
          </Button>
        </View>


        <View styel={{ flex: 1, flexDirection: 'column', }}>
          <Button transparent >
            <Flag code="AR" style={{ width: 25, height: 25, marginLeft: 5 }} />
            <MenuItem onPress={this.hideMenu}>Spanish-Argentinia</MenuItem>
          </Button>
        </View>



        <View styel={{ flex: 1, flexDirection: 'column', }}>
          <Button transparent >
            <Flag code="FR" style={{ width: 25, height: 25, marginLeft: 5 }} />
            <MenuItem onPress={this.hideMenu}>Spanish-France</MenuItem>
          </Button>
        </View>


        <View styel={{ flex: 1, flexDirection: 'column', }}>
          <Button transparent >
            <Flag code="IN" style={{ width: 25, height: 25, marginLeft: 5 }} />
            <MenuItem onPress={this.hideMenu}>India</MenuItem>
          </Button>
        </View>

      </Menu>



    );
  }
}