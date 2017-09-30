import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ExpenseForm from '../Components/new_expense_form.js'

class ExpenseNewScene extends Component {
  render() {
    return(
      <View>
        <Text>Create a New Expense:</Text>
        <ExpenseForm />
      </View>
    )
  }
}
export default ExpenseNewScene;
