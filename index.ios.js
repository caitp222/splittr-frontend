import { Tabs } from './App/Components/router.js';
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

import LoginScene from './App/Scenes/login.ios.js';
import RegisterScene from './App/Scenes/register.ios.js';
import UserShowScene from './App/Scenes/user_show.ios.js';
import ExpenseShowScene from './App/Scenes/expenses_show.ios.js';
import ExpenseNewScene from './App/Scenes/expenses_new.ios.js';
import GroupShowScene from './App/Scenes/group_show.ios.js';
import GroupNewScene from './App/Scenes/new_group.ios.js';
import LinearGradient from 'react-native-linear-gradient';

var styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#00ff00',
    fontWeight: 'bold',
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
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigate('Login')}>
          <Text style={styles.welcome}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigate('Register')}>
          <Text style={styles.welcome}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigate('User')}>
          <Text style={styles.welcome}>User</Text>
        </TouchableHighlight>

        <Tabs/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31708E',
  },
  title: {
    color: 'blue',
    fontSize: 20,
  },
  welcome: {
    fontSize: 20,
    color: '#8FC1E3',
    textAlign: 'justify',
    margin: 10,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
});
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
  GroupShow: {
    screen: GroupShowScene,
  },
  GroupNewScene: {
    screen: GroupNewScene,
  }
});


AppRegistry.registerComponent('splittr', () => splittr);
