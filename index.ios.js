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
  View,
  Button
} from 'react-native';
import { LoginForm } from './App/Components/login_form.js';
import { RegisterForm } from './App/Components/user_register_form.js';
import { ExpenseForm } from './App/Components/new_expense_form';
import { GroupForm } from './App/Components/new_group_form'
import { ExpenseNewScene } from './App/Scenes/expenses_new'
import { GroupNewScene } from './App/Scenes/new_group'
import { LoginScene } from './App/Scenes/login'
import { RegisterScene } from './App/Scenes/register'
import { ExpenseShowScene } from './App/Scenes/expenses_show'



class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

// export default class splittr extends Component {
//   constructor() {
//     super();
//     this.state = {expense: {
//       description: "description",
//       amount: "$12.34",
//       vendor: "Rico's Seaside Bar & Grill",
//       user: "Rico Suave"
//     }}
//   }

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
});


AppRegistry.registerComponent('splittr', () => splittr);
