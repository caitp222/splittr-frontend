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
  TouchableHighlight,
  TextInput,
  View,
  Button
} from 'react-native';

import { LoginScene } from './App/Scenes/login.ios.js';
import { RegisterScene } from './App/Scenes/register.ios.js';
import  UserShowScene  from './App/Scenes/user_show.ios.js'
import  GroupShowScene  from './App/Scenes/group_show.ios.js'
import  ExpenseNewScene  from './App/Scenes/expenses_show.ios.js'

// import { ExpenseForm } from './App/Components/new_expense_form';
// import { GroupForm } from './App/Components/new_group_form';
var styles = StyleSheet.create({
  background: {
    backgroundColor: '#606c70',
    height: "100%"
  },
  button: {
    backgroundColor: '#00ff00',
    fontWeight: 'bold'
  }
})


class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {backgroundColor: '#cccccc'}
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
      <View style={styles.background}>
        <TouchableHighlight onPress={() => navigate('Login')}>
          <Text style={styles.button}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigate('Register')}>
          <Text style={styles.button}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigate('User')}>
          <Text style={styles.button}>User</Text>
        </TouchableHighlight>
        <GroupShowScene navigate={ navigate }/>

        <TouchableHighlight onPress={() => navigate('Expense')}>
          <Text style={styles.button}>Expense</Text>
        </TouchableHighlight>


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
    screen: ExpenseNewScene,
  },
});


AppRegistry.registerComponent('splittr', () => splittr);
