import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput, labelStyle } from 'react-native-elements'
import { StyleSheet,
         TextInput,
         TouchableHighlight,
         View,
         Button,
         Text,
       } from 'react-native';

class RegisterForm extends Component {

  constructor() {
    super();
    this.state = {user: {
      first_name: "First Name",
      last_name: "Last Name",
      email: "email",
      password: "password"
    }};
  }

  handleInputChange(name, text) {
    const user = this.state.user;
    user[name] = text;
    this.setState({user: user})
  }

  onChangeFirstName = this.handleInputChange.bind(this, "first_name")
  onChangeLastName = this.handleInputChange.bind(this, "last_name")
  onChangeEmail = this.handleInputChange.bind(this, "email")
  onChangePassword = this.handleInputChange.bind(this, "password")

  handleHighLightPress() {
    const { user } = this.state
    fetch("https://rocky-forest-46725.herokuapp.com/users", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then((response) => console.log(response))
  }

  handleNewUserSubmit = this.handleHighLightPress.bind(this)

  render() {
    return(
      <View style={styles.text}>
        <FormLabel>First Name</FormLabel>
        <FormInput onChangeText={this.onChangeFirstName}/>
        <FormLabel>Last Name</FormLabel>
        <FormInput onChangeText={this.onChangeLastName}/>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={this.onChangeEmail}/>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={this.onChangePassword}/>
        <Button
          large
          onPress = {this.handleNewUserSubmit}
          color={'#F7F9FB'}
          icon={{ type: 'octicon' }}
          title='Register' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
<<<<<<< HEAD
  form: {
    color: "#808080"
  }
});
=======
  text:{
    fontSize: 40,
    backgroundColor: 'transparent',
    color:'#F7F9FB',
    fontWeight: '400',
  }
})
>>>>>>> master

export {RegisterForm};
