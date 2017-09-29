/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import {
   StackNavigator,
 } from 'react-navigation';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Register from './App/Scenes/register';
import Login from './App/Scenes/login';
import Profile from './App/Scenes/user_profile';
// import Foo from './App/Scenes/login'

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
          navigate('Login', { name: 'Jane' })}
      />
      <Button
        title="Register"
        onPress={() =>
          navigate('Register')}
      />
    </View>
    );
  }
}

const splittr = StackNavigator({
  Home: { screen: Home },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },

});


AppRegistry.registerComponent('splittr', () => splittr);
