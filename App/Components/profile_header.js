import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
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
      firstName: "First Name",
      lastName: "Last Name",
      groupNames: "Name",
    }};
  }

  alert2 = () => {
    alert("bai den conjo")
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text>Princess</Text>
        <Text>Rebecca</Text>
        <Button
          onPress={() =>  navigate('GroupForm')}
          title="Press Me"
        />
      </View>
    )
  }
}

const splittr = StackNavigator({
  GroupForm: {
    screen: GroupForm,
  },
});

export default ProfileHeader;
