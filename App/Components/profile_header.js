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
  render(){
    // const { navigate } = this.props.navigation;
    return(
      <View>
        <Text> Hi {this.props.userName}!</Text>
        <Button
          title="Create New Squad"
          onPress={() =>
            navigate('GroupForm')}
        />
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
