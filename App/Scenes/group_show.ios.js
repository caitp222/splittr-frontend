import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import  MemberList from '../Components/member_list';

const styles = StyleSheet.create({
  background: {
  backgroundColor: 'transparent',
  },
})

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

  componentWillMount = function() {
    console.log(this.props.navigation.state.params.group_id)
    const id = this.props.navigation.state.params.group_id
    console.log(id)
    const url = "http://localhost:3000/groups/"
    const fetchUrl = url + id;
    fetch(fetchUrl,
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
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.background}>
        <TouchableHighlight onPress={() => navigate('CameraAcc')}>
          <Text style={styles.button}>Add New Expense</Text>
        </TouchableHighlight>
        <Text>{this.state.group.groupName}</Text>
        <Text>{this.state.group.details}</Text>
        <Text>Total Group Spend: ${this.state.totalSpend}</Text>
        <Text>Member Split: ${this.state.memberSplit}</Text>
        <MemberList members={this.state.members} navigate={ navigate }/>
      </View>
    )
  }
}
export default GroupShowScene;
