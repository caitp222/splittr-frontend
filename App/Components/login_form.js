import React, {Component} from 'react';
import { AppRegistry,
         StyleSheet,
         TextInput,
         View,
         Text,
       } from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "placeholder",
      password: "password"
    };
  }

  render() {
    return(
      <View>
        <Text>Login</Text>
        <Text>Email:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.email}/>
        <Text>Password:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      value={this.state.password}/>
      </View>
    )
  }
}

export { LoginForm };
// AppRegistry.registerComponent('LoginForm', () => LoginForm);
