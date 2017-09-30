import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class ExpenseShowScene extends Component {
  render() {
    const { expense } = this.props
    return(
      <View>
        <Text>Expense Show</Text>
        <Text>Description: {expense.description}</Text>
        <Text>Amount: {expense.amount}</Text>
        <Text>Vendor: {expense.vendor}</Text>
        <Text>User: {expense.user}</Text>
      </View>
    )
  }
}
export { ExpenseShowScene };
