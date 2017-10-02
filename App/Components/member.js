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
const styles = StyleSheet.create({
  member: {
    fontWeight: '300',

  },
  expense: {
    justifyContent: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  listContainer: {
    flexDirection: 'column',

  }
});

class Member extends Component {
  render() {
    const { member, navigate, groupId } = this.props;
    const expenses = member.expenses
    return(
      <View style={styles.container}>
        <Text style={styles.member}>{member.full_name}:</Text>
        <View style={styles.listContainer}>
        {expenses.map(function(expense, index){
          return (
          <TouchableHighlight style={styles.expense} key={index}>
            <Text onPress = {() => navigate('ExpenseShow', { expense: expense })}>{expense.vendor + ": $" +expense.amount}: button</Text>
          </TouchableHighlight>
          )
        })}
      </View>
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
