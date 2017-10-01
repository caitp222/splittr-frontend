import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Keyboard, TextInput } from 'react-native';
import { AppRegistry,
         StyleSheet,
         TouchableHighlight,
         Button,
         View,
         Text,
       } from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {
      email: "email",
      password: ""
    }};
  }

  handleInputChange(name, text) {
    const user = this.state.user;
    user[name] = text;
    this.setState({user: user})
  }

  onChangeEmail = this.handleInputChange.bind(this, "email");
  onChangePassword = this.handleInputChange.bind(this, "password")

  render() {
    return(
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={this.onChangeEmail}/>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={this.onChangePassword}/>
        <Button
          large
          onPress = {"Placeholder"}
          color={'#9e9e9e'}
          icon={{ type: 'octicon' }}
          title='SIGN IN' />
      </View>
    )
  }
}

export { LoginForm };
// AppRegistry.registerComponent('LoginForm', () => LoginForm);
