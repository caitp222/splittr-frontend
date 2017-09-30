import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let style = StyleSheet.create({
  container: {
    width: 250,
    height: 100,
  },
})

class Expense extends Component {
  render() {
    const { expense } = this.props;
    return(
      <View style={ style.container }>
        <Text>{ expense.user}: </Text>
          <Text>Amount: { expense.amount } paid to: { expense.vendor }</Text>
      </View>
    )
  }
}
export default Expense ;
