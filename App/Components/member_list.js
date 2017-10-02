import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  Member  from './member';
const styles = StyleSheet.create({
  membersList: {
    textAlign: 'center',
    fontSize: 20,
    marginTop:10,
    marginBottom:2
  }
})

class MemberList extends Component {
  render() {
    const { navigate, members, groupId } = this.props;
    return(
      <View>
        <Text style={styles.membersList}>Members list</Text>
        {members.map(function(member, index) {
          return(
            <Member groupId={groupId} member={member} key={index} navigate={navigate}/>
          )
        })}
      </View>
    )
  }
}
export default MemberList ;
