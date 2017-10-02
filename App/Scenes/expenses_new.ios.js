import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ExpenseForm from '../Components/new_expense_form.js'

class ExpenseNewScene extends Component {static navigationOptions = {
  title: 'Bitch better have my money',
  headerStyle: {backgroundColor: '#F7F9FB'}
};
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
