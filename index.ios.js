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

import { LoginScene } from './App/Scenes/login.ios.js';
import { RegisterScene } from './App/Scenes/register.ios.js';
import  UserShowScene  from './App/Scenes/user_show.ios.js'
import ExpenseShowScene from './App/Scenes/expenses_show.ios.js';
import ExpenseNewScene from './App/Scenes/expenses_new.ios.js'
// import { ExpenseForm } from './App/Components/new_expense_form';
// import { GroupForm } from './App/Components/new_group_form';


class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor() {
    super();
    this.state = {expense: {
      description: "description",
      amount: "$12.34",
      vendor: "Rico's Seaside Bar & Grill",
      user: 'Rico Suave'
    }}
  }
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
        <Button
          title="Expense"
          onPress={() =>
            navigate('Expense')}
        />
      </View>
    );
  }
}

const splittr = StackNavigator({
  Home: { screen: Home },
  Login: {
    screen: LoginScene,
  },
  Register: {
    screen: RegisterScene,
  },
  User: {
    screen: UserShowScene,
  },
  Expense: {
    screen: ExpenseShowScene,
  },
});


AppRegistry.registerComponent('splittr', () => splittr);
