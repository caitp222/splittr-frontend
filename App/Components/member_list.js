import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  Member  from './member';


class MemberList extends Component {
  render() {
    return(
      <View>
        <Text>Members</Text>
          <Member />
      </View>
    )
  }
}
export default MemberList ;
