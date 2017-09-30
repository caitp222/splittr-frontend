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
      groupName: "The Lanisters",
      details: "Details"
    }};
  }
  render() {
    return(
      <View>
        <Button
          title={this.state.group.groupName}
          onPress={() =>
            navigate('GroupForm')}
        />
      </View>
    );
  }
}

export default ProfileGroup;
