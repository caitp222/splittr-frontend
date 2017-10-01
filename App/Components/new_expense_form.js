import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
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

        <FormLabel>Vendor</FormLabel>
        <FormInput onChangeText={this.onChangeVendor}/>
        <FormLabel>Description</FormLabel>
        <FormInput onChangeText={this.onChangeDescription}/>
        <FormLabel>Amount</FormLabel>
        <FormInput onChangeText={this.onChangeAmount}/>
        <Button
          large
          onPress = { this.onButtonPress }
          color={'#9e9e9e'}
          icon={{ type: 'octicon' }}
          title='Register' />
      </View>
    )
  }
}

export default ExpenseForm;
