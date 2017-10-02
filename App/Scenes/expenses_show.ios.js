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
    const expenseId = this.props.navigation.state.params.expense.id
    console.log(expenseId)
    const groupId = this.props.navigation.state.params.groupId
    console.log(groupId)
    const fetchUrl = "http://localhost:3000/groups/" + groupId + "/expenses/" + expenseId
    fetch(fetchUrl,
          {method: 'get'}
        ).then((response) =>
        console.log(response.json())
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
