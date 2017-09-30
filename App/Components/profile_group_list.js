import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  Text,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation'

class ProfileGroup extends Component {
  constructor(){
    super();
    this.state = {group: {
      groupName: "Name",
      details: "Details"
    }};
  }
  render() {
    return(
      <View>
        <Text>Group Buttons</Text>
      </View>
    )
  }
}

export default ProfileGroup;
