/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import { LoginForm } from './App/Components/login_form.js';
import { RegisterForm } from './App/Components/user_register_form.js';
import { ExpenseForm } from './App/Components/new_expense_form';
import { GroupForm } from './App/Components/new_group_form';
import ProfileHeader from './App/Components/profile_header'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Login"
          onPress={() =>
            navigate('Login')}
        />
        <Button
          title="Register"
          onPress={() =>
            navigate('Register')}
        />
        <Button
          title="User"
          onPress={() =>
            navigate('User')}
        />
      </View>
    );
  }
}

const splittr = StackNavigator({
  Home: { screen: Home },
  Login: {
    screen: LoginForm,
  },
  Register: {
    screen: RegisterForm,
  },
  User: {
    screen: ProfileHeader,
  },
});


AppRegistry.registerComponent('splittr', () => splittr);
