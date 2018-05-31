import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import SearchInput, { createFilter } from 'react-native-search-filter';
import HamMenu from '../components/HamMenu';

import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Drawer, Content, Card, CardItem, ListItem, List,
    Form, Item, Input, Label, CheckBox
} from 'native-base';
import MultiSelectCountry from '../components/MultiSelectCountry';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

const tableData = [
    { id: 1, name: 'Inv A', country: 'USA', banner: 'Banner USA', amt: 100, active:'Yes' },
    { id: 2, name: 'Inv B', country: 'India', banner: 'Banner India', amt: 210, active:'Yes' },
    { id: 3, name: 'Inv C', country: 'UK', banner: 'Banner UK', amt: 130, active:'No' },
    { id: 4, name: 'Inv D', country: 'CA', banner: 'Banner CA', amt: 145, active:'Yes' },
    { id: 5, name: 'Inv E', country: 'MX', banner: 'Banner MX', amt: 66, active:'Yes' },

];

const items = [{
    id: '1',
    name: 'USA',
}, {
    id: '2',
    name: 'India',
}, {
    id: '3',
    name: 'UK',
}, {
    id: '4',
    name: 'CA',
}, {
    id: '5',
    name: 'MX',
}, {
    id: '6',
    name: 'PA',
}, {
    id: '7',
    name: 'AR',
}, {
    id: '8',
    name: 'AU',
}, {
    id: '9',
    name: 'FR',
}];


const bannerItems = [{
    id: 'b1',
    name: 'Banner AU',
}, {
    id: 'b2',
    name: 'Banner CA',
}, {
    id: 'b3',
    name: 'Banner USA',
}, {
    id: 'b4',
    name: 'Banner UK',
}, {
    id: 'b5',
    name: 'Banner AR',
}, {
    id: 'b6',
    name: 'Banner FR',
}, {
    id: 'b7',
    name: 'Banner Pali',
}, {
    id: 'b8',
    name: 'Banner India',
}, {
    id: 'b9',
    name: 'Banner PA',
}];

export default class ProfileConfig extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
            selectedBanner: [],
            searchTerm: '',
            tableData:tableData,
            showDefaultTable:true
        }
        this.onSaveData = this.onSaveData.bind(this);
        this.onSelectedBannerChange = this.onSelectedBannerChange.bind(this);
        this.onSelectedItemsChange = this.onSelectedItemsChange.bind(this);
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    onSelectedBannerChange = selectedItems => {
        console.log("selectedItems = "+selectedItems);
        this.setState({ selectedBanner: selectedItems });
        // alert(selectedItems);
    };

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
        // alert(selectedItems);
    };

    returnTableData(){
        let filteredEmails = this.state.tableData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(<ScrollView>
            {filteredEmails.map(email => {
                return (
                    <TouchableOpacity onPress={() => alert(email.name)} key={email.id} style={styles.emailItem}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={{ width: 80, fontWeight: '500' }}>Country</Text>

                            </View>
                            <View>
                                <Text style={{ width: 40 }}>{email.country}</Text>

                                {/* <Text style={styles.emailSubject}>{email.banner}</Text> */}
                            </View>

                            <View>
                                <Text style={{ width: 60, fontWeight: '500' }}>Banner</Text>
                            </View>
                            <View>
                                <Text style={styles.emailSubject}>{email.banner}</Text>
                            </View>

                            <View>
                                <Text style={{ width: 60, marginLeft: 15, fontWeight: '500' }}>Active</Text>
                            </View>
                            <View>
                                <Text style={styles.emailSubject}>{email.active}</Text>
                            </View>


                        </View>


                    </TouchableOpacity>
                )
            })}
        </ScrollView>);
    }
    onSaveData(){
        //alert(country + "");
         if(this.state.selectedBanner != '' && this.state.selectedItems != ''){
            //const newid = this.state.tableData.length;
            console.log(this.state.selectedBanner.values+"--"+this.state.selectedItems.toString);
            console.log(this.state.selectedBanner+"--"+this.state.selectedItems);
            console.log("====>>"+this.multiSelect.getSelectedItemsExt(this.state.selectedItems));
            const newdata = { id: 8, name: 'Inv A', country: this.state.selectedItems, banner: this.state.selectedBanner, amt: 100, active:'Yes' }
            console.log(JSON.stringify("newdata--"+newdata));
            tableData.push(newdata);
            console.log("-tableData-"+JSON.stringify(tableData));

            this.setState({ 
                tableData:tableData,
                showDefaultTable:false,
                selectedItems: [],
                selectedBanner: [],
                searchTerm: '',
            });
            
            console.log("New data ==> "+JSON.stringify(this.state.tableData));
           // this.render();
//this.returnTableData;
        }else{
            alert("Invalid data");
        }
       
    }

    returnNewTable(){
        let filteredEmails = this.state.tableData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(<ScrollView>
            {filteredEmails.map(email => {
                return (
                    <TouchableOpacity onPress={() => alert(email.name)} key={email.id} style={styles.emailItem}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={{ width: 80, fontWeight: '500' }}>Country</Text>

                            </View>
                            <View>
                                <Text style={{ width: 50 }}>{email.country}</Text>

                                {/* <Text style={styles.emailSubject}>{email.banner}</Text> */}
                            </View>

                            <View>
                                <Text style={{ width: 80, fontWeight: '500' }}>Banner</Text>
                            </View>
                            <View>
                                <Text style={styles.emailSubject}>{email.banner}</Text>
                            </View>

                            <View>
                                <Text style={{ width: 80, marginLeft: 15, fontWeight: '500' }}>Active</Text>
                            </View>
                            <View>
                                <Text style={styles.emailSubject}>{email.active}</Text>
                            </View>


                        </View>


                    </TouchableOpacity>
                )
            })}
        </ScrollView>);
    }

    render() {
        const { selectedItems, selectedBanner } = this.state;
        
        console.log(JSON.stringify(this.state.tableData));
        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body style={{ width: 266, marginLeft: 0 }}>
                        <Title style={{ fontSize: 14, width: 206, marginLeft: 0 }}>Profile Config</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <HamMenu />
                        </Button>
                    </Right>
                </Header>


                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', borderWidth: 0 }}>
                    <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 1 }}>

                        <View style={{ backgroundColor: 'white', borderWidth: 0, flexDirection: 'row', }}>
                            {/* {this.multiSelect.getSelectedItemsExt(selectedItems)} */}
                            {/* {this.state.selectedItems} */}
                            {/* <Text>{this.state.selectedItems}</Text> */}
                            <View style={{ backgroundColor: 'white', borderWidth: 0, width: 100 }}>
                                <Text style={{ margin: 10, fontSize: 15, fontWeight: '500' }}>Name</Text>
                            </View>
                            <View style={{ backgroundColor: 'white', borderWidth: 0, width: 350 }}>
                                <Text style={{ marginTop: 10, marginBottom: 10, fontSize: 15, }}>Global</Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: 'white', borderWidth: 0, flexDirection: 'row', }}>
                        {/* <View>
          {this.multiSelect.getSelectedItemsExt(this.state.selectedItems)}
        </View> */}
                            {/* {this.state.selectedItems} */}
                            {/* <Text>{this.state.selectedItems}</Text> */}
                            <View style={{ backgroundColor: 'white', borderWidth: 0, width: 100 }}>
                                <Text style={{ margin: 10, fontSize: 15, fontWeight: '500' }}>Country</Text>
                            </View>
                            <View style={{ backgroundColor: 'white', borderWidth: 0, width: 300 }}>
                                <MultiSelect
                                   
                                    items={items}
                                    uniqueKey="name"
                                    ref={(component) => { this.multiSelect = component }}
                                    onSelectedItemsChange={this.onSelectedItemsChange}
                                    selectedItems={selectedItems}
                                    selectText="Country"
                                    searchInputPlaceholderText="Search Country..."
                                    onChangeInput={(text) => console.log(text)}
                                    altFontFamily="ProximaNova-Light"
                                    tagRemoveIconColor="red"
                                    tagBorderColor="blue"
                                    tagTextColor="green"
                                    selectedItemTextColor="red"
                                    selectedItemIconColor="blue"
                                    itemTextColor="green"
                                    displayKey="name"
                                    searchInputStyle={{ color: '#CCC' }}
                                    submitButtonText="Select"

                                />
                            </View>
                        </View>

                        <View style={{ backgroundColor: 'white', borderWidth: 0, flexDirection: 'row', }}>
                            {/* {this.multiSelect.getSelectedItemsExt(selectedItems)} */}
                            {/* {this.state.selectedItems} */}
                            {/* <Text>{this.state.selectedItems}</Text> */}
                            <View style={{ backgroundColor: 'white', borderWidth: 0, width: 100 }}>
                                <Text style={{ margin: 10, marginTop: 10, fontSize: 15, fontWeight: '500' }}>Banner</Text>
                            </View>
                            <View style={{ backgroundColor: 'white', borderWidth: 0, width: 300 }}>
                                <MultiSelect
                                   
                                    items={bannerItems}
                                    uniqueKey="name"
                                    ref={(component) => { this.multiSelect = component }}
                                    onSelectedItemsChange={this.onSelectedBannerChange}
                                    selectedItems={selectedBanner}
                                    selectText="Banner"
                                    searchInputPlaceholderText="Search Banner..."
                                    onChangeInput={(text) => console.log(text)}
                                    altFontFamily="ProximaNova-Light"
                                    tagRemoveIconColor="red"
                                    tagBorderColor="blue"
                                    tagTextColor="green"
                                    selectedItemTextColor="red"
                                    selectedItemIconColor="blue"
                                    itemTextColor="green"
                                    displayKey="name"
                                    searchInputStyle={{ color: '#CCC' }}
                                    submitButtonText="Select"

                                />
                            </View>
                        </View>


                        <View style={{ backgroundColor: 'white', borderWidth: 0, flexDirection: 'row', }}>
                            {/* {this.multiSelect.getSelectedItemsExt(selectedItems)} */}
                            {/* {this.state.selectedItems} */}
                            {/* <Text>{this.state.selectedItems}</Text> */}
                            <View style={{ backgroundColor: 'white', borderWidth: 0, width: 100 }}>
                                <Text style={{ margin: 10, marginTop: 10, fontSize: 15, fontWeight: '500' }}>Active</Text>
                            </View>
                            <View style={{ backgroundColor: 'white', borderWidth: 0, width: 400, marginTop: 10 }}>
                                <CheckBox checked={true} />
                            </View>
                        </View>

                        <Button full success style={{ margin: 5, alignItems: 'center', marginTop: 5 }} 
                        onPress={this.onSaveData}>
                            <Text style={{ textAlign: 'center', paddingLeft: 5, marginLeft: 11, color: 'white' }}>SAVE</Text>

                        </Button>


                        <SearchInput
                            onChangeText={(term) => { this.searchUpdated(term) }}
                            style={styles.searchInput}
                            placeholder="Type a message to search"
                        />
                        {this.state.showDefaultTable ? this.returnTableData() : this.returnNewTable()}


                        <View style={{ flexDirection: 'column', width: 300, borderWidth: 0, marginLeft: 20 }}>

                            {/* <MultiSelectCountry /> */}


                        </View>
                    </View>
                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    emailItem: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)',
        width: 100
    },
    searchInput: {
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
    }
});