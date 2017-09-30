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
  }
  render() {
    const { expenses, user } = this.props;
    return(
      <View>
        <Text>{user.name}</Text>
          <FlatList
            data = {expenses}
            renderItem={({item}) => <Text><Expense expense={item}/></Text>}
          />
      </View>
    )
  }
}

export default Member ;
