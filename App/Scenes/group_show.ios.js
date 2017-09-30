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
    const { navigate } = this.props;
    return(
      <View>
        <Text>group name</Text>
        <MemberList navigate={ navigate }/>
      </View>
    )
  }
}
export default GroupShowScene ;
