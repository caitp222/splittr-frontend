import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GroupForm from '../Components/new_group_form'

class GroupNewScene extends Component {
  render(){
    return(
    <View>
      <Text>Create New Group</Text>
      <GroupForm />
    </View>
    )
  }
}

export default GroupNewScene;
