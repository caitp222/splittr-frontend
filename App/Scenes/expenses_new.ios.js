import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ExpenseForm } from '../Components/new_expense_form'

class ExpenseContainer extends Component {
  render() {
    return(
      <View>
        <Text>Create a New Expense</Text>
        <ExpenseForm />
      </View>
    )
  }
}
export { ExpenseContainer };
