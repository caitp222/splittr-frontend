import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
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
  },
  deco: {
    flex: 1,
    backgroundColor: "transparent",
  }
})

class MemberList extends Component {
  render() {
    const { navigate, members, groupId, settledUp } = this.props;
    return(
      <View style={styles.deco}>
        {members.map(function(member, index) {
          return(
            <Member settledUp={settledUp} groupId={groupId} member={member} key={index} navigate={navigate}/>
          )
        })}
      </View>
    )
  }
}
export default MemberList ;
