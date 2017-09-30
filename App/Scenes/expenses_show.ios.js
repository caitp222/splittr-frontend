import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class ExpenseShowScene extends Component {
  constructor() {
    super();
    this.state = { expense: {
        vendor: "",
        amount: "",
        description: "",
        user: "",
        error: ""
    }}
  }

  componentWillMount = function() {
    fetch("http://localhost:3000/groups/12/expenses/2",
          {method: 'get'}
        ).then((response) => response.json()
        ).then((responseJson) =>  {this.setState(
                                  {expense:
                                    {vendor: responseJson.vendor,
                                      amount: responseJson.amount,
                                      description: responseJson.description,
                                      user: responseJson.paid_by}
                                    })
      })
  }

  render() {
    const { expense } = this.state
    return(
      <View>
        <Text>Expense</Text>
        <Text>Vendor: {expense.vendor}</Text>
        <Text>Description: {expense.description}</Text>
        <Text>Amount: {expense.amount}</Text>
        <Text>Paid By: {expense.user}</Text>
      </View>
    )
  }
}
export default ExpenseShowScene ;
