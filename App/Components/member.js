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
  memberName: {
    fontWeight: "700",
    fontSize: 15

  },

  expense: {
    textAlign: 'left',
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: '#83a4d4',
    borderRadius: 15,
    margin: 2,
    borderWidth: 0.25,
    borderColor: '#8BBFC2'
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
        <Text style={styles.memberName}>{member.full_name}:</Text>
        <View style={styles.listContainer}>
        {expenses.map(function(expense, index){
          return (
          <TouchableHighlight style={styles.expense} key={index}>
            <Text style={styles.expense} onPress = {() => navigate('ExpenseShow', { expense: expense })}>{expense.vendor + ": $" +expense.amount}</Text>
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
