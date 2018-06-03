import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Icon } from 'native-base';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

class SideBar extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#3f51b5', flexDirection:'row'}}>
        <Icon name='home' style={{ fontSize: 30, color: 'white', marginLeft: 125, }} onPress={this.navigateToScreen('Landing')} />
          <Icon name='md-log-out' style={{ fontSize: 30, color: 'white', marginLeft: 20, }} onPress={this.navigateToScreen('First')} />
        </View>
        <ScrollView>


          <View>
            <Text style={styles.sectionHeadingStyle}>
              Configuration
            </Text>
            <View style={styles.navSectionStyle}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-person' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Landing')}>

                  Crew
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-build' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('LineConfig')}>
                  Line Config
              </Text>
              </View>


              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-key' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                  Security
              </Text>
              </View>


              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-cart' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('SwipeList')}>
                  Department
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-globe' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ShrinkProvision')}>
                  Shrink Provision
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-filing' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Email')}>
                  Email Template
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-clipboard' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                  Line Scheduling
              </Text>
              </View>


            </View>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle}>
              Inventory Schedule
            </Text>
            <View style={styles.navSectionStyle}>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-contacts' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                  Inventory Reconcillation
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-people' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                  Security
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-paper' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                  Department
              </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-lock' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                  Update Schedule
              </Text>
              </View>



            </View>
          </View>

          <View>


            <Text style={styles.sectionHeadingStyle}>
              Recon
            </Text>


            <View style={styles.navSectionStyle}>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='ios-cog-outline' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ProfileConfig')}>
                  ProfileConfig
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-settings' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ReconLineConfig')}>
                  Recon Line Config
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-contact' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                  Recon Details
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-copy' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                  Reconcillation
              </Text>
              </View>


            </View>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle}>
              Closing
            </Text>
            <View style={styles.navSectionStyle}>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-clock' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ProfileConfig')}>
                  ProfileConfig
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='ios-archive-outline' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                  Weekly
              </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-copy' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                  Weekend
              </Text>
              </View>





            </View>
          </View>


          <View>
            <Text style={styles.sectionHeadingStyle}>
              Reporting
            </Text>
            <View style={styles.navSectionStyle}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name='md-stats' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('SummaryReport')}>
                Summary Reports
              </Text>
              </View>

               <View style={{ flexDirection: 'row' }}>
                <Icon name='logo-buffer' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Security Reports
              </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-man' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                Department Reports
              </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-copy' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Inventory Reports
              </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name='md-filing' style={{ margin: 10, marginLeft: 5, fontSize: 25 }} />
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Exception Management
              </Text>
              </View>

            
              
              
             
             
              
            </View>
          </View>


        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Developed By Suraj</Text>
        </View>
      </View>
    );
  }
}

SideBar.propTypes = {
  navigation: PropTypes.object
};

export default SideBar;

