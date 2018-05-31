import React from 'react'
import { AreaChart, Grid, BarChart, PieChart, YAxis, LineChart, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Drawer, Content, Card, CardItem, ListItem,
    Form, Item, Input, Label, CheckBox
} from 'native-base';
const { width, height } = Dimensions.get('window');
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
    ScrollView

} from 'react-native';
import HamMenu from '../components/HamMenu';

export default class SummaryReport extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = { 
            showFirstData: false,
            showSecondData: false ,
            showThirdData: false ,
        }
        
    }

    onPress = () => {
        this.setState({
            showFirstData: !this.state.showFirstData,
           
        })
    }

    onSecondPress = () => {
        this.setState({
            showSecondData: !this.state.showSecondData,
        })
    }

    onThirdPress = () => {
        this.setState({
            showThirdData: !this.state.showThirdData,
        })
    }

    render() {

        const data = [50, 10, 40, 95, 4, -24, 85, 91, 35, 53, -53, 24]
        const xdata = [50, 10, 40, 95, 4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

        const data1 = [14, -1, 100, 95, 94, 24, 8, 85, 91, 35, 53, 53, 78, 66, 96, 33, -26, 32, 73, 8]
            .map((value) => ({ value }))
        const data2 = [24, 28, 93, 77, 42, 62, 52, 87, 21, 53, 78, 62, 72, 6, 89, 70, -94, 10, 86, 84]
            .map((value) => ({ value }))

        const barData1 = [
            {
                data: data1,
                svg: {
                    fill: 'rgb(134, 65, 244)',
                },
            },
            {
                data: data2,
            },
        ]



        const fill = '#00bcd4'
        const bardata = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]
        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
        const contentInset = { top: 20, bottom: 20 }
        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body style={{ width: 266, marginLeft: 0 }}>
                        <Title style={{ fontSize: 14, width: 206, marginLeft: 0 }}>Summary Report</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <HamMenu />
                        </Button>
                    </Right>
                </Header>



                {/* <Card style={{ borderWidth: 2, margin: 5, height: 300 }}> */}


                <ScrollView>
                    <Card style={this.state.showFirstData ? { borderWidth: 2, marginRight: 7, height: 380, marginLeft: 7 } 
                    : 
                    { borderWidth: 2, marginRight: 7, height: 300, marginLeft: 7 }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', margin: 5 }}>Percent Details</Text>

                        <View style={{ height: 200, flexDirection: 'row' }}>
                            <YAxis
                                data={data}
                                contentInset={contentInset}
                                svg={{
                                    fill: 'grey',
                                    fontSize: 10,
                                }}
                                numberOfTicks={10}
                                formatLabel={value => `${value}%`}
                            />
                            <LineChart
                                style={{ flex: 1, marginLeft: 16 }}
                                data={data}
                                svg={{ stroke: 'rgb(134, 65, 244)' }}
                                contentInset={contentInset}
                            >
                                <Grid />
                            </LineChart>
                        </View>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                backgroundColor: 'white',
                                padding: 10,
                                
                            }}
                            onPress={this.onPress}
                        >
                        { this.state.showFirstData ? <Text style={{color: '#3f51b5'}}> Hide Data </Text> :  <Text style={{color: '#3f51b5'}}> Show Data </Text> }
                        </TouchableOpacity>
                        {this.state.showFirstData ? 
                        <View>

                        
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory US </Text>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory UK </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 50 </Text>
                            <Text> 10 </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:120, fontWeight:'500'}}> Inventory MX </Text>
                            <Text style={{width:120, fontWeight:'500'}}> Inventory IN </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 40 </Text>
                            <Text> 95 </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory CA </Text>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory FR </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 4 </Text>
                            <Text> -24 </Text>
                            </View>
                            </View> 
                            


                             <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory Pali </Text>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory Wmt </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 85 </Text>
                            <Text> 91 </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:120, fontWeight:'500'}}> Inventory Sams </Text>
                            <Text style={{width:120, fontWeight:'500'}}> Inventory ASDA </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 35 </Text>
                            <Text> 53 </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory FL </Text>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory GR </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> -53 </Text>
                            <Text> 24 </Text>
                            </View>
                            </View>


                            </View>: null}
                    </Card>




                    <Card style={this.state.showSecondData ? { borderWidth: 2, marginRight: 7, height: 480, marginLeft: 7 } 
                    : 
                    { borderWidth: 2, marginRight: 7, height: 300, marginLeft: 7 }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', margin: 5 }}>Inventory Details</Text>

                        <BarChart
                            style={{ height: 200 }}
                            data={bardata}
                            svg={{ fill }}
                            contentInset={{ top: 30, bottom: 30 }} animationDuration={400}
                        >
                            <Grid />
                        </BarChart>

                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                backgroundColor: 'white',
                                padding: 10
                            }}
                            onPress={this.onSecondPress}
                        >
                        { this.state.showSecondData ? <Text style={{color: '#3f51b5'}}> Hide Data </Text> :  <Text style={{color: '#3f51b5'}}> Show Data </Text> }
                           
                        </TouchableOpacity>
                        {this.state.showSecondData ? 
                        <View>

                        
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory US </Text>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory UK </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 50 </Text>
                            <Text> 10 </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:120, fontWeight:'500'}}> Inventory MX </Text>
                            <Text style={{width:120, fontWeight:'500'}}> Inventory IN </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 40 </Text>
                            <Text> 95 </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory CA </Text>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory FR </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 4 </Text>
                            <Text> -24 </Text>
                            </View>
                            </View> 
                            


                             <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory Pali </Text>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory Wmt </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 85 </Text>
                            <Text> 91 </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:120, fontWeight:'500'}}> Inventory Sams </Text>
                            <Text style={{width:120, fontWeight:'500'}}> Inventory ASDA </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> 35 </Text>
                            <Text> 53 </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory FL </Text>
                            <Text style={{width:100, fontWeight:'500'}}> Inventory GR </Text>
                            </View>
                           
                            <View style={{flexDirection:'column'}}>
                            <Text> -53 </Text>
                            <Text> 24 </Text>
                            </View>
                            </View>


                            </View>: null}


                    </Card>

                    <Card style={{ borderWidth: 2, marginRight: 7, height: 250, marginLeft: 7 }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', margin: 5 }}>Percent Details</Text>
                        <PieChart
                            style={{ height: 200 }} animationDuration={300}
                            data={pieData}
                        />

                    </Card>

                    <Card style={{ borderWidth: 2, marginRight: 7, height: 230, marginLeft: 7 }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', margin: 5 }}>Department Inventory</Text>
                        <View style={{ height: 200, padding: 20 }}>



                            <LineChart
                                style={{ flex: 1 }}
                                data={xdata}
                                gridMin={0}
                                contentInset={{ top: 10, bottom: 10 }}
                                svg={{ stroke: 'rgb(134, 65, 244)' }}
                            >
                                <Grid />
                            </LineChart>
                            <XAxis
                                style={{ marginHorizontal: -10 }}
                                data={xdata}
                                formatLabel={(value, index) => index}
                                contentInset={{ left: 10, right: 10 }}
                                svg={{ fontSize: 10, fill: 'black' }}
                            />
                        </View>

                    </Card>
                    <Card style={{ borderWidth: 2, marginRight: 7, height: 230, marginLeft: 7 }}>
                        <Text style={{ fontSize: 18, color: '#3f51b5', margin: 5 }}>Inventory Comparion Details</Text>
                        <BarChart
                            style={{ height: 200 }}
                            data={barData1}
                            yAccessor={({ item }) => item.value}
                            svg={{
                                fill: 'green',
                            }}
                            contentInset={{ top: 30, bottom: 30 }}
                            {...this.props}
                        >
                            <Grid />
                        </BarChart>
                    </Card>

                </ScrollView>

                {/* </Card> */}

            </Container>
        )
    }
}