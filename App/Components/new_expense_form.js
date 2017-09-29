import React, {Component} from 'react';
import { TextInput,
         View,
         Text,
       } from 'react-native';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      description: "description",
      amount: "$12.34",
      vendor: "Rico's Seaside Bar & Grill",
    }
  }

  

  render() {
    return(
      <View>
        <Text>Add New Expense</Text>
        <Text>Vendor:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.vendor}/>
        <Text>Description:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.description}/>
        <Text>Amount:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.amount}/>
      </View>
    )
  }
}

export { ExpenseForm };
