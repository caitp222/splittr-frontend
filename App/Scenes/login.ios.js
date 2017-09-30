import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { LoginForm } from '../Components/login_form'

class LoginScene extends Component {
  render(){
    return(
    <View>
      <Text>Login</Text>
      <LoginForm />
    </View>
    )
  }
}

export { LoginScene };
