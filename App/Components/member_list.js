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
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '700',
    marginTop:30,
    marginBottom:10,

  }
})

class MemberList extends Component {
  render() {
    const { navigate, members, groupId } = this.props;
    return(
      <View>
        <Text style={styles.membersList}>Member Expenses:</Text>
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
