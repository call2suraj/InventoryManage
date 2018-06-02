import React, { Component } from 'react';
import { Container, Header, Content, Badge, Icon,  } from 'native-base';
import {
    StyleSheet,
    Text,
    View,

    Dimensions

} from 'react-native';
const { width, height } = Dimensions.get('window');
export default class InventoryData extends Component {
    render() {
        return (
            
            <View style={{ flexDirection: 'column', marginTop: 15 , borderWidth:1, margin:4, borderColor:'#3f51b5'}}>
                        <View style={{ flexDirection: 'row', margin: 8,borderBottomWidth:1,borderColor:'lightgray' }}>
                            <Text style={{width:200, color:'black', fontSize:15}}>Not Started</Text>
                            <Badge style={{  marginLeft: width-300, marginBottom:4 }}>
                                <Text style={{color:'white'}}>20</Text>
                            </Badge>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 8 ,borderBottomWidth:1,borderColor:'lightgray'}}>
                                <Text style={{width:200,color:'black', fontSize:15}}>Completed</Text>
                                <Badge success style={{  marginLeft: width-300 , marginBottom:4}}>
                                    <Text style={{color:'white'}}>40</Text>
                                </Badge>
                            </View>
                        <View style={{ flexDirection: 'row', margin: 8 ,borderBottomWidth:1,borderColor:'lightgray'}}>
                        <Text style={{width:200,color:'black', fontSize:15}}>In Progress</Text>
                        <Badge warning style={{  marginLeft: width-300 , marginBottom:4}}>
                                <Text style={{color:'white'}}>30</Text>
                            </Badge>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 8,borderBottomWidth:1,borderColor:'lightgray' }}>
                        <Text style={{width:200,color:'black', fontSize:15}}>Number of Inventories</Text>
                            <Badge info style={{  marginLeft: width-300, marginBottom:4 }}>
                                <Text style={{color:'white'}}>90</Text>
                            </Badge>
                        </View>






                    </View>
        );
    }
}