import { DrawerNavigator , TabNavigator} from 'react-navigation';
import React, { Component } from 'react';
import FCM from "react-native-fcm";
import Login from '../containers/Login';
import SideBar from '../components/SideBar';
import HamMenu from '../components/HamMenu';
import Landing from '../containers/Landing';
import LineConfig from '../containers/LineConfig';
import ShrinkProvision from '../containers/ShrinkProvision';
import SummaryReport from '../components/AreaChart';
import ProfileConfig from '../containers/ProfileConfig';
import ReconLineConfig from '../containers/ReconLineConfig';
import TabOne from '../components/TabOne';
import TabTwo from '../components/TabTwo';
import Email from '../components/Email';
import SwipeList from '../components/SwipeList';
export default DrawerNavigator({
    First: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        drawerLockMode: 'locked-closed'
      })
    },
    SideBar: {
        screen: SideBar
      },
      Landing: {
        screen: Landing
      },
      LineConfig: {
        screen: LineConfig
      },
      HamMenu: {
        screen: HamMenu
      },
      ShrinkProvision: {
        screen: ShrinkProvision
      },
      ProfileConfig: {
        screen: ProfileConfig
      },
      SummaryReport: {
        screen: SummaryReport
      },
      ReconLineConfig: {
        screen: ReconLineConfig
      },SwipeList: {
        screen: SwipeList
      },
      
      Email: {
        screen: Email
      },
      Home: {
        screen: TabNavigator({
          Home: {
            screen: TabOne
          },
          Friends: {
            screen: TabTwo,
            
          },
        },

        {
          tabBarPosition: 'top',
          tabBarOptions: {
            activeTintColor: 'white',  // Color of tab when pressed
      inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
              style: {
                  backgroundColor: '#3f51b5',
                  padding: 1,
                  marginTop: 1
              },
               indicatorStyle: {
                  borderBottomColor: 'yellow',
                  borderBottomWidth: 1,
              },
              tabStyle: {
                  borderRightColor: 'yellow',
                  borderRightWidth: 1,
              }
          }}
        
      ),
       
      },

      
  }, {
    contentComponent: SideBar,
    drawerWidth: 230
  });

//export default Navigation;


