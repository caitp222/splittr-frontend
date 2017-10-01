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
    const { navigate, members } = this.props;
    return(
      <View>
        <Text>Members list</Text>
        {members.map(function(member, index) {
          return(
            <Member member={member} key={index} navigate={navigate}/>
          )
        })}
      </View>
    )
  }
}
export default MemberList ;
