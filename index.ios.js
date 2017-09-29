/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { LoginForm } from './App/Components/login_form.js';
import { RegisterForm } from './App/Components/user_register_form.js';
import { ExpenseForm } from './App/Components/new_expense_form'
import { GroupForm } from './App/Components/new_group_form'
import { ExpenseNewScene } from './App/Scenes/expenses_new'
import { GroupNewScene } from './App/Scenes/new_group'
import { LoginScene } from './App/Scenes/login'
import { RegisterScene } from './App/Scenes/register'
import { ExpenseShowScene } from './App/Scenes/expenses_show'


export default class splittr extends Component {
  constructor() {
    super();
    this.state = {expense: {
      description: "description",
      amount: "$12.34",
      vendor: "Rico's Seaside Bar & Grill",
      user: "Rico Suave"
    }}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <ExpenseShowScene expense={this.state.expense} />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('splittr', () => splittr);
