import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet,
         TextInput,
         TouchableHighlight,
         View,
         Button,
         Text,
       } from 'react-native';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {user: {
      first_name: "First Name",
      last_name: "Last Name",
      email: "email",
      password: "password"
    }};
  }

  handleInputChange(name, text) {
    const user = this.state.user;
    user[name] = text;
    this.setState({user: user})
  }

  onChangeFirstName = this.handleInputChange.bind(this, "first_name")
  onChangeLastName = this.handleInputChange.bind(this, "last_name")
  onChangeEmail = this.handleInputChange.bind(this, "email")
  onChangePassword = this.handleInputChange.bind(this, "password")

  handleHighLightPress() {
    const { user } = this.state
    fetch("http://localhost:3000/users", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then((response) => console.log(response))
  }

  handleNewUserSubmit = this.handleHighLightPress.bind(this)

  render() {
    return(
      <View>
        <Text>First Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.user.first_name} onChangeText={this.onChangeFirstName}/>
        <Text>Last Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.user.last_name} onChangeText={this.onChangeLastName}/>
        <Text>Email:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.user.email} onChangeText={this.onChangeEmail}/>
        <Text>Password:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.user.password} onChangeText={this.onChangePassword}/>

      <TouchableHighlight onPress={this.handleNewUserSubmit}>
        <Text>Register User: button</Text>
      </TouchableHighlight>
      </View>
    )
  }
}

export {RegisterForm};
