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
  TextInput,
  View
} from 'react-native';
import { LoginForm } from './App/Components/login_form.js';
import { RegisterForm } from './App/Components/user_register_form.js';
import { ExpenseForm } from './App/Components/new_expense_form'
import { GroupForm } from './App/Components/new_group_form'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
<<<<<<< HEAD
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
=======
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <RegisterForm />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
>>>>>>> c8651a03280bdf8be9ebcabe60d5d756e9fb6112
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
