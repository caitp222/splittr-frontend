import React, {Component} from 'react';
import { Keyboard, TextInput } from 'react-native';
import { AppRegistry,
         StyleSheet,
         TouchableHighlight,
         Button,
         View,
         Text,
         AsyncStorage
       } from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {
      email: "email",
      password: ""
    }};
  }

  handleInputChange(name, text) {
    const user = this.state.user;
    user[name] = text;
    this.setState({user: user})
  }

  onChangeEmail = this.handleInputChange.bind(this, "email");
  onChangePassword = this.handleInputChange.bind(this, "password")

  handleHighLightPress() {
    const { user } = this.state;
    fetch("http://localhost:3000/sessions", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(function(response) {return response.json()} )
    .then(function(responseJson) {
      let sessionId = responseJson.id
      AsyncStorage.setItem('sessionId', JSON.stringify(sessionId),
    () => { AsyncStorage.getItem('sessionId', (err, result) => {
      console.log(result)
    }) } )
      })
  }

  handleUserSubmit = this.handleHighLightPress.bind(this)

  render() {
    return(
      <View>
        <Text>Email:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          name="email"
          value={this.state.user.email} onChangeText={this.onChangeEmail}
        />
        <Text>Password:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} name="password"
      value={this.state.user.password} onChangeText={this.onChangePassword}/>
        <TouchableHighlight >
          <Text onPress = {this.handleUserSubmit}>Login:button</Text>
        </TouchableHighlight>
      </View>
    )
  }

}

export { LoginForm };
// AppRegistry.registerComponent('LoginForm', () => LoginForm);
