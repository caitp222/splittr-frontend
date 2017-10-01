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
  constructor() {
    super();
    this.state = {user: {
      firstName: "Princess",
      lastName: "Rebecca",
      groupNames: "Groups",
    }};
  }
  render(){
    //const { navigate } = this.props.navigation;
    return(
      <View>
        <Text> {this.state.user.firstName} {this.state.user.lastName}</Text>

        <TouchableHighlight onPress={() =>
          navigate('GroupForm')}>
          <Text>Create New Squad: button</Text>
        </TouchableHighlight>

        <Text> {this.state.user.groupNames} </Text>
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
