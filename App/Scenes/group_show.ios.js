import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  MemberList from '../Components/member_list';

class GroupShowScene extends Component {
  render() {
    return(
      <View>
        <Text>group name</Text>
        <MemberList />
      </View>
    )
  }
}
export default GroupShowScene ;
