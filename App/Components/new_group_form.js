import React, {Component} from 'react';
import { TextInput,
         View,
         Text,
       } from 'react-native';

class GroupForm extends Component {
  constructor() {
    super();
    this.state = {group: {
        group_name: "Name",
        details: "Details"
      }}
  }

  handleInputChange(name, text) {
    const group = this.state.group;
    group[name] = text;
    this.setState({group: group})
  }

  onChangeGroupName = this.handleInputChange.bind(this, "group_name")
  onChangeDetails = this.handleInputChange.bind(this, "details")

  render() {
    return(
      <View>
        <Text>Group Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.group_name} onChangeText={this.onChangeGroupName}/>
        <Text>Description:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.group.details} onChangeText={this.onChangeDetails}/>
      </View>
    )
  }
}

export { GroupForm };
