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
    const { expense } = this.props
    return(
      <View>
        <ExpenseForm  />
      </View>
    )
  }
}
export default ExpenseNewScene;
