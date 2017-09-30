import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  Member  from './member';


class GroupShowScene extends Component {
  render() {
    return(
      <View>
        <Text>Members list</Text>
          <Member />
      </View>
    )
  }
}
export default GroupShowScene ;
