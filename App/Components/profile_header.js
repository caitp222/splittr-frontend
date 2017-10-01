import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Text,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import GroupForm from './new_group_form';
import { StackNavigator } from 'react-navigation';

class ProfileHeader extends Component {
  render(){
    // const { navigate } = this.props.navigation;
    return(
      <View>
        <Text> Hi {this.props.userName}!</Text>
        <TouchableHighlight onPress={() =>
          navigate('GroupForm')}>
          <Text>Create New Squad: button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const splittr = StackNavigator({
  GroupForm: {
    screen: GroupForm,
  },
});

export default ProfileHeader;
