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

import LoginScene from './App/Scenes/login.ios.js';
import RegisterScene from './App/Scenes/register.ios.js';
import UserShowScene from './App/Scenes/user_show.ios.js'
import ExpenseShowScene from './App/Scenes/expenses_show.ios.js';
import ExpenseNewScene from './App/Scenes/expenses_new.ios.js'
import GroupShowScene from './App/Scenes/group_show.ios.js'
import GroupNewScene from './App/Scenes/new_group.ios.js'

var styles = StyleSheet.create({
  button: {
    backgroundColor: '#5085A5',
  }
})


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
      <View style={styles.button}>
        <Button
          title="Login"
          color= "#ffffff"
          onPress={() =>
            navigate('Login')}
        />
        <Button
          title="NewGroup"
          color= "#ffffff"
          onPress={() =>
            navigate('NewGroup')}
        />
        <Button
          title="User"
          color= "#F7F9FB"
          onPress={() =>
            navigate('User')}
        />
        <Button
          title="Group"
          onPress={() =>
            navigate('Group')}
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
  NewGroup: {
    screen: GroupNewScene,
  },
  User: {
    screen: UserShowScene,
  },
  Group: {
    screen: GroupShowScene,
  },
});


AppRegistry.registerComponent('splittr', () => splittr);
