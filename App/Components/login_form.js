import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Keyboard, TextInput } from 'react-native';
import { AppRegistry,
         StyleSheet,
         TouchableHighlight,
         Button,
         View,
         Text,
         AsyncStorage
       } from 'react-native';
import { StackNavigator } from 'react-navigation';
import UserShowScene from '../Scenes/user_show.ios.js';

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
    }).then(function(response) {return response.json()}.bind(this) )
    .then(function(responseJson) {
      let sessionId = responseJson.id
      AsyncStorage.setItem('sessionId', JSON.stringify(sessionId),
    () => { AsyncStorage.getItem('sessionId', (err, result) => {
      const userId = result;
      this.props.navigation.navigate("User", {userId: userId})
    }) } )
  }.bind(this))
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
        <Text onPress = {"Placeholder"}>Login:button</Text>
      </TouchableHighlight>



        <FormLabel style={styles.formLabel}>Email</FormLabel>
        <FormInput onChangeText={this.onChangeEmail}/>
        <FormLabel style={styles.formLabel}>Password</FormLabel>
        <FormInput onChangeText={this.onChangePassword}/>

        <TouchableHighlight onPress={this.handleUserSubmit}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableHighlight>

        <Button
          large
          onPress = {this.handleUserSubmit}
          style={styles.formLabel}
          color={'#9e9e9e'}
          icon={{ type: 'octicon' }}
          title='SIGN IN' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  formLabel: {
    backgroundColor: "transparent",
    height: 40,
     borderColor: 'gray', borderWidth: 1
  },
  signIn:{
    textAlign: "center",
    fontSize: 25,
    color: '#9e9e9e'
  }
});

export { LoginForm };
