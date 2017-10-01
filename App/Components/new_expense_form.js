import React, {Component} from 'react';
import { TextInput,
         View,
         Button,
         Text,
       } from 'react-native';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {expense: {
      description: "description",
      amount: 12.34,
      vendor: "Rico's Seaside Bar & Grill",
      membership_id: 3
    }};
  }

  handleInputChange(name, text) {
    const expense = this.state.expense;
    expense[name] = text;
    this.setState({expense: expense})
  }

  onChangeDescription = this.handleInputChange.bind(this, "description")
  onChangeAmount = this.handleInputChange.bind(this, "amount")
  onChangeVendor = this.handleInputChange.bind(this, "vendor")
  onButtonPress = this.handleButtonPress.bind(this)

  handleButtonPress() {
    const expense = this.state.expense;
    fetch("http://localhost:3000/groups/1/expenses", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({expense})
    }).then((response) => console(response))
  }

  render() {
    return(
      <View>
        <Text>Vendor:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.expense.vendor} onChangeText={this.onChangeVendor}/>
        <Text>Description:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.expense.description} onChangeText={this.onChangeDescription}/>
        <Text>Amount:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.expense.amount} onChangeText={this.onChangeAmount}/>

      <TouchableHighlight onPress={this.onButtonPress}>
        <Text>Create Expense: button</Text>
      </TouchableHighlight>

      </View>
    )
  }
}

export default ExpenseForm;
