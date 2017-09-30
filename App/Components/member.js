import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
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
            <Button
              key={index}
              title= {expense.vendor + ": " +expense.amount}
              onPress = {() =>
                navigate('Expense', { expense: expense })}
            />
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
