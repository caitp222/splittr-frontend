import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  Button,
  Text,
  View
} from 'react-native';
import Expense from './expense';

import  ExpenseShowScene  from '../Scenes/expenses_show.ios.js'



class Member extends Component {
  constructor() {
    super();
  }
  render() {
    const { expenses, user } = this.props;
    const { navigate } = this.props;

    return(
      <View>
        {expenses.map(function(expense, index){
          return (

            <TouchableHighlight >
              <Text key={index} onPress = {() => navigate('Expense', { expense: expense })}>{expense.vendor + ": " +expense.amount}: button</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    )
  }
}
StackNavigator({
  Expense: {
    screen: ExpenseShowScene,
  }
});

export default Member ;
