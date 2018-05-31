import React, { Component } from 'react';
import Country from '../components/Country';
import Banner from '../components/Banner';
import DatePicker from 'react-native-datepicker'
import LiveData from '../components/LiveData';
import InventoryData from '../components/InventoryData';
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

import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Drawer, Content, Card, CardItem, ListItem,
    Form, Item, Input, Label, CheckBox
} from 'native-base';

import HamMenu from '../components/HamMenu';
const { width, height } = Dimensions.get('window');
export default class ShrinkProvision extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            selected1: "key1",
            checked: false,
            language: '',
            date: "2016-05-15"
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

    onLogin(){
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
                        <Title style={{ fontSize: 14, width: 206, marginLeft: 0 }}>Shrink Provision</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <HamMenu />
                        </Button>
                    </Right>
                </Header>

                <View>

                    <Country />
                </View>

                <View>

                    <Banner />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ margin: 8, color: 'black', fontSize: 15,  marginBottom: 10 }}>Dept No</Text>
                    <TextInput
                        style={{ margin: 5, height: 35, width: 300, borderColor: 'gray', borderWidth:1,marginBottom: 10, marginLeft: 30 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <Card style={{ borderWidth: 2, margin:5, height:300 }}>
                <Text style={{fontSize:18, color:'#3f51b5',}}>Percent Details</Text>
                    
                    <View style={{ flexDirection: 'row' }}>

                        <Item floatingLabel style={{ width: 170, marginLeft: 5 }}>
                            <Label style={{ fontSize: 15, }}>New Store Cost</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={{ width: 220, marginLeft: 5 }}>
                            <Label style={{ fontSize: 15, }}>New Store Retail</Label>
                            <Input />
                        </Item>

                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Item floatingLabel style={{ width: 170, marginLeft: 5 }}>
                            <Label style={{ fontSize: 15, }}>Exist Store Above Max</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={{ width: 220, marginLeft: 5, }}>
                            <Label style={{ fontSize: 15, }}>Exist Store Retail Above Max</Label>
                            <Input />
                        </Item>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Item floatingLabel style={{ width: 170, marginLeft: 5 }}>
                            <Label style={{ fontSize: 15, }}>Exist Store Below Min</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last style={{ width: 220, marginLeft: 5, }}>
                            <Label style={{ fontSize: 15, }}>Exist Store Retail Below Min</Label>
                            <Input />
                        </Item>
                    </View>
                    <Button full success style={{ margin: 2, alignItems: 'center', marginTop: 4 }} onPress={this.onSave}>
                <Text style={{ textAlign: 'center', paddingLeft: 5, marginLeft: 11, color: 'white' }}>SAVE</Text>
               
              </Button>
                </Card>

                <ScrollView style={{ marginTop: 0 }}>
                <LiveData />
            </ScrollView>


                <View>

                </View>
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
