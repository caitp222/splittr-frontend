import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
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
        <FormLabel>First Name</FormLabel>
        <FormInput onChangeText={this.onChangeFirstName}/>
        <FormLabel>Last Name</FormLabel>
        <FormInput onChangeText={this.onChangeLastName}/>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={this.onChangeEmail}/>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={this.onChangePassword}/>
        <Button
          large
          onPress = {"Placeholder"}
          color={'#9e9e9e'}
          icon={{ type: 'octicon' }}
          title='Register' />
      </View>
    )
  }
}

export {RegisterForm};
