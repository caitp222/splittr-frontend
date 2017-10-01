import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class GroupForm extends Component {
  constructor() {
    super();
    this.state = {group: {
        group_name: "Name",
        details: "Details",
        creator_id: 7
      }};
  }

  handleInputChange(name, text) {
    const group = this.state.group;
    group[name] = text;
    this.setState({group: group})
  }

  onChangeGroupName = this.handleInputChange.bind(this, "groupName")
  onChangeDetails = this.handleInputChange.bind(this, "details")
  onButtonPress = this.handleButtonPress.bind(this)

  handleButtonPress() {
    const { group } = this.state;
    fetch("http://localhost:3000/groups", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({group})
    }).then((response) => console.log(response))
  }

  render() {
    return(
      <View>
        <Text>Group Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.groupName} onChangeText={this.onChangeGroupName}/>
        <Text>Description:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.details} onChangeText={this.onChangeDetails}/>
        <TouchableHighlight onPress={this.onButtonPress}>
          <Text>Create Expense:button</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default GroupForm;
