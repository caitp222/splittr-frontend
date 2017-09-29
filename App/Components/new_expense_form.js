import React, {Component} from 'react';
import { TextInput,
         View,
         Text,
       } from 'react-native';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {expense: {
      description: "description",
      amount: "$12.34",
      vendor: "Rico's Seaside Bar & Grill"
    }}
  }

  handleInputChange(name, text) {
    const expense = this.state.expense;
    expense[name] = text;
    this.setState({expense: expense})
  }

  onChangeDescription = this.handleInputChange.bind(this, "description")
  onChangeAmount = this.handleInputChange.bind(this, "amount")
  onChangeVendor = this.handleInputChange.bind(this, "vendor")

  render() {
    return(
      <View>
        <Text>Add New Expense</Text>
        <Text>Vendor:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.expense.vendor} onChangeText={this.onChangeVendor}/>
        <Text>Description:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.expense.description} onChangeText={this.onChangeDescription}/>
        <Text>Amount:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.expense.amount} onChangeText={this.onChangeAmount}/>
      </View>
    )
  }
}

export { ExpenseForm };
