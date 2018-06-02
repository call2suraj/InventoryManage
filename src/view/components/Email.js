import React, { Component } from 'react';
import { View, Alert, Button } from 'react-native';
import Mailer from 'react-native-mail';
 
export default class Email extends Component {
 
  handleEmail = () => {
    Mailer.mail({
      subject: 'Need Help',
      recipients: ['call2suraj@gmail.com'],
      ccRecipients: ['supportCC@example.com'],
      bccRecipients: ['supportBCC@example.com'],
      body: '<b>This is a demo for Ignite 3</b>',
      isHTML: true,
      attachment: {
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
        name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
        ],
        { cancelable: true }
      )
    });
  }
 
  render() {
    return (
      <View >
        <Button
          onPress={this.handleEmail}
          title="Email Me"
          color="#3f51b5"
          accessabilityLabel="Send Email"
        />
      </View>
    );
  }
}