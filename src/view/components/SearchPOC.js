import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Card, CardItem, Body } from 'native-base';
//import datas from '../Data/mails';
//import PendingData from './PendingData';
//import Accordian from './Accordian';
//import HeaderData from './HeaderData';
const KEYS_TO_FILTERS = ['Location', 'AlertPriority', 'AlertStatus', '_id', 'Product'];

export default class SearchPOC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            data: ''
        }

    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {
        console.log("--passedData--> " + this.props.passedData)
        const filteredEmails = this.props.passedData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (

            <View style={Platform.OS === 'ios' ? styles.container1 : styles.container}>
                <SearchInput
                    onChangeText={(term) => { this.searchUpdated(term) }}
                    style={styles.searchInput}
                    placeholder="Type a text to search"
                />
                <ScrollView style={{ marginBottom: 2, backgroundColor: 'white' }}>
                    {filteredEmails.map(data => {
                        return (
                            <Card key={data._id}>
                                <View style={{ marginTop: 8, }} >

                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ margin: 8, flexDirection: 'row', width: 100 }}>
                                            <Text style={{ width: 80, fontSize:16 ,color:'#3f51b5'}}>Country</Text>
                                            <Text style={{ marginLeft: 10 , fontSize:16 ,color:'#3f51b5'}}>: {data.Location}</Text>
                                        </View>

                                        <View style={{ margin: 8, flexDirection: 'row', width: 100, marginLeft: 50 }}>
                                            <Text style={{ width: 80 , fontSize:16,color:'#3f51b5'}}>Product</Text>
                                            <Text style={{ marginLeft: 10 , fontSize:16,color:'#3f51b5'}}>: {data.Product}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 8, flexDirection: 'row', width: 100 }}>
                                            <Text style={{ width: 80 , fontSize:16,color:'#3f51b5'}}>Banner</Text>
                                            <Text style={{ marginLeft: 10 , fontSize:16,color:'#3f51b5'}}>: {data.Subject}</Text>
                                        </View >

                                        <View style={{ margin: 8, flexDirection: 'row', width: 100, marginLeft: 50 }}>
                                            <Text style={{ width: 80 , fontSize:16,color:'#3f51b5'}}>Type</Text>
                                            <Text style={{ marginLeft: 10 , fontSize:16,color:'#3f51b5'}}>: {data.AlertType}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ margin: 8, flexDirection: 'row', width: 100 }}>
                                            <Text style={{ width: 80 , fontSize:16,color:'#3f51b5'}}>Priority</Text>
                                            <Text style={{ marginLeft: 10 , fontSize:16,color:'#3f51b5'}}>: {data.AlertPriority}</Text>
                                        </View>
                                        <View style={{ margin: 8, flexDirection: 'row', width: 100, marginLeft: 50 }}>
                                            <Text style={{ width: 80 , fontSize:16,color:'#3f51b5'}}>Status</Text>
                                            <Text style={{ marginLeft: 10 , fontSize:16,color:'#3f51b5'}}>: {data.AlertStatus}</Text>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        )
                    })}
                    <View></View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    container1: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        marginTop: 20
    },
    emailItem: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    textStyle: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput: {
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
    }
})