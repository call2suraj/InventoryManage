import React, { Component } from 'react';
import LiveData from '../components/LiveData';
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
export default class LineConfig extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            selected1: "key1",
            checked: false
        };
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }
    static navigationOptions = {
        header: null
    };


    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }

    handleCheckbox() {
        this.setState({ checked: !this.state.checked });
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
                        <Button transparent >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body style={{ width: 266, marginLeft: 0 }}>
                        <Title style={{ fontSize: 14, width: 206, marginLeft: 0 }}>Line Configuration</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <HamMenu />
                        </Button>
                    </Right>
                </Header>
                {/* <Text style={{ width: 180 , fontSize:20,color:'#00bcd4', margin:5}}>LineConfig</Text> */}

                <LiveData />
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
