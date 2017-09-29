import React, {Component} from 'react';
import { StyleSheet,
         TextInput,
         View,
         Button,
         Text,
       } from 'react-native';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {user: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "email",
      password: "password"
    }};
  }

  handleInputChange(name, text) {
    const user = this.state.user;
    user[name] = text;
    this.setState({user: user})
  }

  onChangeFirstName = this.handleInputChange.bind(this, "firstName")
  onChangeLastName = this.handleInputChange.bind(this, "lastName")
  onChangeEmail = this.handleInputChange.bind(this, "email")
  onChangePassword = this.handleInputChange.bind(this, "password")

  render() {
    return(
      <View>
        <Text>Register</Text>
        <Text>First Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.user.firstName} onChangeText={this.onChangeFirstName}/>
        <Text>Last Name:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.user.lastName} onChangeText={this.onChangeLastName}/>
        <Text>Email:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.user.email} onChangeText={this.onChangeEmail}/>
        <Text>Password:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.user.password} onChangeText={this.onChangePassword}/>
      <Button
          onPress={"h1"}
          title="Register User"
          color="#841584"
          accessibilityLabel="Create new user"/>
      </View>
    )
  }
}

export {RegisterForm};
