import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  MemberList from '../Components/member_list';

class GroupShowScene extends Component {
  constructor() {
    super();
    this.state = {group: {
      groupName: "",
      details: "",
      settledUp: false,
    }, totalSpend: 0,
       memberSplit: 0,
       members: []
     }
   }

  componentDidMount = function() {
    fetch("http://localhost:3000/groups/9",
      {method: 'GET'}
    ).then((response) => response.json()
  ).then((responseJson) => {this.setState({
    group: {
      groupName: responseJson.group.group_name,
      details: responseJson.group.details,
      settledUp: responseJson.group.settle_up
    },
    totalSpend: responseJson.total_spend,
    memberSplit: responseJson.member_split,
    members: responseJson.members
  })})
  }

  render() {
    return(
      <View>
        <Text>{this.state.group.groupName}</Text>
        <Text>{this.state.group.details}</Text>
        <Text>Total Group Spend: ${this.state.totalSpend}</Text>
        <Text>Member Split: ${this.state.memberSplit}</Text>
        <MemberList members={this.state.members}/>
      </View>
    )
  }
}
export default GroupShowScene;
