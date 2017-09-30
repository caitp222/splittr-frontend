import React, {Component} from 'react';
import { TextInput,
         View,
         Button,
         Text,
       } from 'react-native';

class ProfileHeader extends Component {
  constructor() {
    super();
    this.state = {user: {
      firstName: "First Name",
      lastName: "Last Name",
      groupNames: "Name",
    }};
  }
  render(){
    return(
      <View>
        <Text>firstName:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.expense.vendor} onChangeText={this.onChangeVendor}/>
      <Text>lastName:</Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.expense.vendor} onChangeText={this.onChangeVendor}/>
        <Button
            onPress={"h1"}
            title="Create Group"
            color="#841584"
            accessibilityLabel="Create New Group"/>
      </View>
    )
  }
}
