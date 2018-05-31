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
import MockDataTwo from './MockdataTwo';
export default class TabTwo extends Component {
    constructor() {
        super();

        this.state = {

        };
    }
    onClick() {
        console.log("onClick");
    }
    static navigationOptions = ({ navigation, screenProps }) => ({

        title: 'COST',
        headerStyle: { backgroundColor: '#3f51b5', height: 88, paddingTop: 1 },
        headerTitleStyle: { color: 'white', fontSize: 15 },
        headerLeft: <View style={{ paddingRight: 33, paddingTop: 1, borderWidth: 0 }}>
            <View>
                <View>
                    <Icon name='arrow-back' size={24}
                        onPress={() => { navigation.goBack() }} style={styles.iconStyleLeft} />
                </View>
            </View>
        </View>,
        headerRight: <View style={styles.headerRight}>
            <Icon name={'search'} size={25}
                style={styles.iconStyleRight} />
        </View>,
    });

    render() {
        return (
            <Container>
                <ScrollView style={{ marginTop: 0 }}>
                    <MockDataTwo />
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        borderWidth: 0,
        borderColor: 'red',
        flexDirection: 'row',
        marginTop: 0,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: 'white'
    },
    headerRight: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderWidth: 0,
        paddingTop: 4,
        width: 160,
        flex: 4
    },
    iconStyleRight: {
        paddingRight: 3,
        textAlign: 'right',
        paddingTop: 28,
        color: 'white',
        height: 100,
        marginRight: 5
    },
    iconStyleLeft: {
        paddingLeft: 12,
        textAlign: 'left',
        paddingBottom: 6,
        marginRight: 10,
        color: 'white'
    }

});