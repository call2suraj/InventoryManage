import React, { Component } from 'react';
import Country from '../components/Country';
import Banner from '../components/Banner';
import DatePicker from 'react-native-datepicker'
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
    Dimensions

} from 'react-native';

import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Drawer, Content, Card, CardItem, ListItem,
    Form, Item, Input, Label, CheckBox
} from 'native-base';
import SideBar from '../components/SideBar';
import HamMenu from '../components/HamMenu';
const { width, height } = Dimensions.get('window');
export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            selected1: "key1",
            checked: false,
            language: '',
            fromdate: "2018-01-15",
            todate: "2018-05-15"
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
                    <Body style={{ width: width, marginLeft: 0,alignItems:'center' }}>
                        <Title style={{ fontSize: 14, width: width, marginLeft: 0 }}>Inventory Management System</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <HamMenu />
                        </Button>
                    </Right>
                </Header>
                <Text style={{ margin: 8, color: 'black', fontSize: 22, marginBottom:10 }}>Inventory Details</Text>
                <View>

                    <Country />
                </View>

                <View>

                    <Banner />
                </View>
                <View style={{ flexDirection: 'row' ,  marginTop:8}}>
                    <Text style={{ margin: 8, color: 'black', fontSize: 15 }}>From Date</Text>
                    <DatePicker
                        style={{ width: width-148 , marginLeft:30}}
                        date={this.state.fromdate}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2018-01-01"
                        maxDate="2018-06-25"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: width-200,
                                top: 4,
                                marginLeft: 5
                            },
                            dateInput: {
                                marginLeft: 16
                            }

                        }}
                        onDateChange={(date) => { this.setState({ fromdate: date }) }}
                    />
                </View>
                <View style={{ flexDirection: 'row' , marginTop:8}}>
                    <Text style={{ margin: 8, color: 'black', fontSize: 15 }}>To Date     </Text>
                    <DatePicker
                        style={{ width: width-148 , marginLeft:30}}
                        date={this.state.todate}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2018-05-01"
                        maxDate="2018-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: width-200,
                                top: 4,
                                marginLeft: 5
                            },
                            dateInput: {
                                marginLeft: 16
                            }

                        }}
                        onDateChange={(date) => { this.setState({ todate: date }) }}
                    />
                </View>
               <View>
               <InventoryData />
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
