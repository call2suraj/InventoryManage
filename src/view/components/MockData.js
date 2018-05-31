import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import data from '../../data/recondata';
const KEYS_TO_FILTERS = ['linename', 'location','city','state'];
 
export default class MockData extends Component{
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEdatas = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEdatas.map(data => {
            return (
              <TouchableOpacity onPress={()=>alert(data.linename)} key={data.lineno} style={styles.emailItem}>
                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100, fontWeight:'500'}}>Line Number</Text>
                  <Text style={styles.emailSubject}>:  {data.lineno}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Line Name</Text>
                  <Text style={styles.emailSubject}>:  {data.linename}</Text>
                </View>


                 <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Cost</Text>
                  <Text style={styles.emailSubject}>:  {data.cost}</Text>
                </View>


                 <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Retail</Text>
                  <Text style={styles.emailSubject}>:  {data.retail}</Text>
                </View>

                 <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Location</Text>
                  <Text style={styles.emailSubject}>:  {data.location}</Text>
                </View>

                 <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Banner</Text>
                  <Text style={styles.emailSubject}>:  {data.banner}</Text>
                </View>




                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Manager</Text>
                  <Text style={styles.emailSubject}>:  {data.magr}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Date</Text>
                  <Text style={styles.emailSubject}>:  {data.date}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Year</Text>
                  <Text style={styles.emailSubject}>:  {data.year}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Reconsiled</Text>
                  <Text style={styles.emailSubject}>:  {data.reconsiled}</Text>
                </View>


                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Reconsiled</Text>
                  <Text style={styles.emailSubject}>:  {data.dept}</Text>
                </View>

                 <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>City</Text>
                  <Text style={styles.emailSubject}>:  {data.city}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>State</Text>
                  <Text style={styles.emailSubject}>:  {data.state}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>Division</Text>
                  <Text style={styles.emailSubject}>:  {data.division}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{width:100,fontWeight:'500'}}>User ID</Text>
                  <Text style={styles.emailSubject}>:  {data.useid}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});