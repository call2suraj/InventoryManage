import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Dimensions,ScrollView } from 'react-native';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Drawer, Content, Card, CardItem, ListItem,
    Form, Item, Input, Label, CheckBox, Picker
} from 'native-base';
const { width, height } = Dimensions.get('window');
import DatePicker from 'react-native-datepicker'
import Country from './Country';
import Banner from './Banner';
import AccountMethod from './AccountMethod';
import HamMenu from './HamMenu';
import ReconName from './ReconName';
import Type from './Type';
import Name from './Name';
export default class DepartmentPopup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            date: new Date(),
            checked: false,
            cost: false,
            retail: false,
            margin: false
        };
        this.handleCheckbox = this.handleCheckbox.bind(this);


        this.handlecostCheckbox = this.handlecostCheckbox.bind(this);
        this.handleretailCheckbox = this.handleretailCheckbox.bind(this);
        this.handlemarginCheckbox = this.handlemarginCheckbox.bind(this);

    }

    handlecostCheckbox() {
        this.setState({ cost: !this.state.cost });
    }
    handleretailCheckbox() {
        this.setState({ retail: !this.state.retail });
    }
    handlemarginCheckbox() {
        this.setState({ margin: !this.state.margin });
    }



    handleCheckbox() {
        this.setState({ checked: !this.state.checked });
    }


    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
         

            <View style={{ marginTop: 0, marginRight: 0,  }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    {/* <View >
                        <View> */}
                           
                            <View>
                                <Country disabled/>
                                <Banner />
                                <AccountMethod />
                            
                                <ReconName />
                                <Type />
                                <Name />
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ margin: 8, color: 'black', fontSize: 15, width: 100 }}>Number</Text>
                                    <Item regular style={{ height: 35, width: width - 150, marginLeft: 10, marginTop: 0 }}>
                                        <Input disabled defaultValue={"11"}/>
                                    </Item>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 2 }}>
                                    <Text style={{ margin: 8, color: 'black', fontSize: 15, width: 100 }}>Tollarance Amount</Text>
                                    <Item regular style={{ height: 35, width: width - 150, marginLeft: 10, marginTop: 4 }}>
                                        <Input disabled defaultValue={"2.5"}/>
                                    </Item>
                                </View>


                                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                    <Text style={{ margin: 8, color: 'black', fontSize: 15, width: 100 }}>Multiplier</Text>
                                    <Item regular style={{ height: 35, width: width - 150, marginLeft: 10, marginTop: 0 }}>
                                        <Input disabled defaultValue={"1.5"}/>
                                    </Item>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <Text style={{ margin: 8, color: 'black', fontSize: 15 }}>Effective Date</Text>
                                    <DatePicker
                                        style={{ width: 245, marginLeft: 0 }}
                                        date={this.state.date} disabled
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        minDate="2016-06-01"
                                        maxDate="2016-07-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 190,
                                                top: 4,
                                                marginLeft: 5
                                            },
                                            dateInput: {
                                                marginLeft: 20
                                            }

                                        }}
                                        onDateChange={(date) => { this.setState({ date: date }) }}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                    <Text style={{ marginTop: 15, color: 'black', fontSize: 15, marginLeft: 8 }}>Allow Edit</Text>
                                    <CheckBox disabled checked={this.state.checked} onPress={this.handleCheckbox} style={{ marginLeft: 40, marginTop: 15 }} />

                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                    <Text style={{ marginTop: 15, color: 'black', fontSize: 15, marginLeft: 8 , width: 100}}>Accounting Method</Text>
                                    {/* <ListItem> */}
                                    <CheckBox disabled checked={true} onPress={this.handlecostCheckbox} style={{ marginTop: 20 }} />
                                    <Body >
                                        <Text style={{ marginTop: 10 }}>Cost</Text>
                                    </Body>

                                    <CheckBox disabled checked={this.state.retail} onPress={this.handleretailCheckbox} style={{ marginTop: 20, marginLeft:0 }} />
                                    <Body >
                                        <Text style={{ marginTop: 10, marginLeft:0, marginRight:0 }}>Retail</Text>
                                    </Body>
                                    <CheckBox disabled checked={this.state.margin} onPress={this.handlemarginCheckbox} style={{ marginTop: 20, marginLeft:0 }} />
                                    <Body >
                                        <Text style={{ marginTop: 10 , marginLeft:0 }}>Margin</Text>
                                    </Body>
                                    {/* </ListItem> */}
                                </View>

                            </View>
                            <Button full success style={{ margin: 15, alignItems: 'center', marginTop: 5 , marginBottom:5}} onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                                <Text style={{ textAlign: 'center', paddingLeft: 5, marginLeft: 11, color: 'white' }}>CLOSE</Text>
                            </Button>
                        {/* </View>

                    </View> */}
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Icon name='information-circle' style={{color:'#3f51b5' , margin: 17 }} ></Icon>
                </TouchableHighlight>
                </View>
        );
    }
}