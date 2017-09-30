import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  Member  from './member';


class MemberList extends Component {
  constructor() {
    super();
    this.state ={
    expenses: [
      {
        description: "description",
        amount: "$12.34",
        vendor: "Rico's Seaside Bar & Grill",
        user: 'Rico Suave'
      },
      {
        description: "This was a seafood joint",
        amount: "$132.99",
        vendor: "Rocco's seafood taco's",
        user: 'Leo'
      }
    ],
    user: {name:"Rico"}
    };
  }

  render() {
    const { expenses, user } = this.state;
    return(
      <View>
        <Text>Members list</Text>
          <Member expenses={ expenses } user={ user }/>
      </View>
    )
  }
}
export default MemberList ;






// this.state = {
//   expenses:[],
//   user: {name:"Rico"}
// }
