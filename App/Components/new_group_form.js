import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GroupShowScene from '../Scenes/group_show.ios.js';

class GroupForm extends Component {
  constructor() {
    super();
    this.state = {group: {
        group_name: "Name",
        details: "Details",
        creator_id: 24
      }};
  }

  handleInputChange(name, text) {
    const group = this.state.group;
    group[name] = text;
    this.setState({group: group})
  }

  onChangeGroupName = this.handleInputChange.bind(this, "group_name")
  onChangeDetails = this.handleInputChange.bind(this, "details")
  onButtonPress = this.handleButtonPress.bind(this)

  handleButtonPress() {
    const { group } = this.state;
    const { navigation } = this.props;
    fetch("http://localhost:3000/groups", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({group})
    }).then(function(response) {
      console.log(response)
    }).then((response) =>
      navigation.navigate("GroupShow")
    )
  }

  render() {
    return(
      <View>
        <Text>Group Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.group_name} onChangeText={this.onChangeGroupName}/>
        <Text>Description:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.details} onChangeText={this.onChangeDetails}/>
        <TouchableHighlight onPress={this.onButtonPress}>
          <Text>Create Group:button</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


export default GroupForm;
