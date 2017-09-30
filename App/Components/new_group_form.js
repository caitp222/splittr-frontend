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
        groupName: "Name",
        details: "Details"
      }};
  }

  handleInputChange(name, text) {
    const group = this.state.group;
    group[name] = text;
    this.setState({group: group})
  }

  onChangeGroupName = this.handleInputChange.bind(this, "groupName")
  onChangeDetails = this.handleInputChange.bind(this, "details")

  render() {
    return(
      <View>
        <Text>Group Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.groupName} onChangeText={this.onChangeGroupName}/>
        <Text>Description:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.details} onChangeText={this.onChangeDetails}/>
        <Button
           onPress={this.onButtonPress}
           title="Create Group"
           color="#841584"
           accessibilityLabel="Create new group"
        />
      </View>
    )
  }
}

export default GroupForm;
