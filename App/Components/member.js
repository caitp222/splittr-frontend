import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import Expense from './expense';

class Member extends Component {
  constructor() {
    super();
    this.state = {expenses: [{
      description: "description",
      amount: "$12.34",
      vendor: "Rico's Seaside Bar & Grill",
      user: 'Rico Suave'
      }, {description: "This was a seafood joint",
      amount: "$132.99",
      vendor: "Rocco's seafood taco's",
      user: 'Leo'}]}
    }
  render() {
    const { expenses } = this.state;
    return(
      <View>
        <Text>Member.name</Text>
        <Text>Expenses</Text>
          <FlatList
            data = {expenses}
            renderItem={({item}) => <Text><Expense expense={item}/></Text>}
          />
      </View>
    )
  }
}
export default Member ;
