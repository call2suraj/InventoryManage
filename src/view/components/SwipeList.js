import React, { Component } from 'react';
import { ListView ,View,Text} from 'react-native';
//import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import HamMenu from '../components/HamMenu';
import DepartmentPopup from '../components/DepartmentPopup';
import {
    Container, Header, Left, Body, Right, Button, Icon,
    Title, Drawer, Content, Card, CardItem, ListItem, List,
    Form, Item, Input, Label, CheckBox,
} from 'native-base';


const datas = [
  'Grocery Department',
  'Frogen Department',
  'Bakery Department',
  'Car Department',
  'Electronic Department',
  'Transpoprt Department',
  'Merchandise Department',
  'Home Department',
];
export default class SwipeList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      isHidden:false
    };

    this.showText = this.showText.bind(this);
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  showText(){
    this.setState({
        isHidden : !this.state.isHidden
    });
  }
  
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header>
                        <Left>
                            <Button transparent >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ width: 266, marginLeft: 0 }}>
                            <Title style={{ fontSize: 14, width: 206, marginLeft: 0 }}>Department Configuration</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <HamMenu />
                            </Button>
                        </Right>
                    </Header>
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem >
                  <View style={{flexDirection:'column', margin:5}}>
                  <Text style={{marginLeft:0, fontSize:15, margin:0}} onPress={this.showText}>{data}</Text>
                  {this.state.isHidden ? <Text style={{marginLeft:0, fontSize:15, margin:0}}>
                  Addreess: 513 S Dodson Rd, Rogers, AR 72758
                  </Text>:null}
                
              
               
                      </View>
               
              </ListItem>}
            renderLeftHiddenRow={data =>
                <DepartmentPopup />
            //   <Button full onPress={() => {

            //         if(data == 'Grocery Department' ){
            //             alert(data + " is located at aisle A1")
            //         }else if(data ==  'Bakery Department'){
            //             alert(data + " is located at aisle A2")
            //         }else if(data == 'Car Department'){
            //             alert(data + " is located at aisle A3")
            //         }else if(data ==  'Electronic Department'){
            //             alert(data + " is located at aisle A4")
            //         }else if(data ==  'Transpoprt Department'){
            //             alert(data + " is located at aisle A5")
            //         }else if(data == 'Merchandise Department'){
            //             alert(data + " is located at aisle A6")
            //         }else if(data == 'Frogen Department'){
            //             alert(data + " is located at aisle A7")
            //         }else{
            //             alert(data + " is located at aisle A8")
            //         }
            //     }
               
            //   }>
            //     <Icon active name="information-circle" />
             // </Button>}
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}