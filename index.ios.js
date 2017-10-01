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
      <View style={styles.background}>
        <LinearGradient colors={['#83a4d4', '#b6fbff']} style={styles.linearGradient}>
        <TouchableHighlight onPress={() => navigate('Login')}>
          <Text style={styles.button}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigate('Register')}>
          <Text style={styles.button}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigate('User')}>
          <Text style={styles.button}>User</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigate('Expense')}>
          <Text style={styles.button}>Expense</Text>
        </TouchableHighlight>
        {/* <Tabs/> */}
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
  }
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
