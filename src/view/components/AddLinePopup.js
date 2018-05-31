import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Dimensions } from 'react-native';
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
export default class AddLinePopup extends Component {


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


            <View style={{ marginTop: 10, marginRight: 0 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View >
                        <View>
                            <Container>
                                <Header style={{ marginBottom: 22 }}>

                                    <Body style={{ width: 306, marginLeft: 0 }}>
                                        <Title style={{ fontSize: 14, width: 206, marginLeft: 50 }}>Recon Line Configuration</Title>
                                    </Body>

                                </Header>
                            </Container>
                            <View style={{ marginTop: 15, }}>
                                <Country />
                                <Banner />
                                <AccountMethod />
                                <Country />
                                <ReconName />
                                <Type />
                                <Name />
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ margin: 8, color: 'black', fontSize: 15, width: 100 }}>Number</Text>
                                    <Item regular style={{ height: 35, width: width - 150, marginLeft: 27, marginTop: 2 }}>
                                        <Input />
                                    </Item>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ margin: 8, color: 'black', fontSize: 15, width: 100 }}>Tollarance Amount</Text>
                                    <Item regular style={{ height: 35, width: width - 150, marginLeft: 27, marginTop: 6 }}>
                                        <Input />
                                    </Item>
                                </View>


                                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                                    <Text style={{ margin: 8, color: 'black', fontSize: 15, width: 100 }}>Multiplier</Text>
                                    <Item regular style={{ height: 35, width: width - 150, marginLeft: 27, marginTop: 2 }}>
                                        <Input />
                                    </Item>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <Text style={{ margin: 8, color: 'black', fontSize: 15 }}>From Date</Text>
                                    <DatePicker
                                        style={{ width: 290, marginLeft: 30 }}
                                        date={this.state.date}
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
                                                left: 245,
                                                top: 4,
                                                marginLeft: 5
                                            },
                                            dateInput: {
                                                marginLeft: 26
                                            }

                                        }}
                                        onDateChange={(date) => { this.setState({ date: date }) }}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ marginTop: 15, color: 'black', fontSize: 15, marginLeft: 8 }}>Remember Me</Text>
                                    <CheckBox checked={this.state.checked} onPress={this.handleCheckbox} style={{ marginLeft: 25, marginTop: 15 }} />

                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ marginTop: 15, color: 'black', fontSize: 15, marginLeft: 8 }}>Accounting Method</Text>
                                    {/* <ListItem> */}
                                    <CheckBox checked={this.state.cost} onPress={this.handlecostCheckbox} style={{ marginTop: 15 }} />
                                    <Body >
                                        <Text style={{ marginTop: 15 }}>Cost</Text>
                                    </Body>

                                    <CheckBox checked={this.state.retail} onPress={this.handleretailCheckbox} style={{ marginTop: 15 }} />
                                    <Body >
                                        <Text style={{ marginTop: 15 }}>Retail</Text>
                                    </Body>
                                    <CheckBox checked={this.state.margin} onPress={this.handlemarginCheckbox} style={{ marginTop: 15 }} />
                                    <Body >
                                        <Text style={{ marginTop: 15 }}>Margin</Text>
                                    </Body>
                                    {/* </ListItem> */}
                                </View>

                            </View>
                            <Button full success style={{ margin: 15, alignItems: 'center', marginTop: 44 }} onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                                <Text style={{ textAlign: 'center', paddingLeft: 5, marginLeft: 11, color: 'white' }}>SUBMIT</Text>
                            </Button>
                        </View>

                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Icon name='ios-add-circle' style={{ color: '#3f51b5', marginLeft: width - 30 }} ></Icon>
                </TouchableHighlight>
            </View>

        );
    }
}