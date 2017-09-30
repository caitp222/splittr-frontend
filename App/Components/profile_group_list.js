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
    this.state = [groups: {
      groupName: "The Lanisters", groupName: "The Starks", groupName: "The Targaryens",
    }];
  }
  render() {
    return(
      <View>
        <Button
          title={this.state.groups.groupName}
          onPress={() =>
            navigate('GroupForm')}
        />
      </View>
    );
  }
}

export default ProfileGroup;
