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
  Image,
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
import CameraAccess from './App/Components/camera.js';

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
        <Image
        source={require('./waterdrop-3.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
        <TouchableHighlight onPress={() => navigate('Login')}>
          <Text style={styles.welcome}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Register')}>
          <Text style={styles.welcome}>Register</Text>
        </TouchableHighlight>
      </View>
      </Image>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    color: 'blue',
    fontSize: 20,
  },
  welcome: {
    fontSize: 60,
    color: '#8FC1E3',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
    margin: 10,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
});
const splittr = StackNavigator({
  Home: { screen: Home },
  CameraAcc:{ screen: CameraAccess},
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
