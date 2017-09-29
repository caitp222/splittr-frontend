import React, {Component} from 'react';
import { StyleSheet,
         TextInput,
         View,
         Text,
       } from 'react-native';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      email: "email",
      password: "password"
    };
  }

  render() {
    return(
      <View>
        <Text>Register</Text>
        <Text>First Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.firstName}/>
        <Text>Last Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.lastName}/>
        <Text>Email:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.email}/>
        <Text>Password:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.password}/>
      </View>
    )
  }
}

export {RegisterForm};
