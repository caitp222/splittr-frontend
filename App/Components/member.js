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
  render() {
    const { member, navigate, groupId } = this.props;
    console.log(groupId)
    const expenses = member.expenses
    return(
      <View>
        <Text>{member.full_name}</Text>
        {expenses.map(function(expense, index){
          return (
            <TouchableHighlight key={index}>
              <Text onPress = {() => navigate('ExpenseShow', { expense: expense })}>{expense.vendor + ": $" +expense.amount}: button</Text>
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
