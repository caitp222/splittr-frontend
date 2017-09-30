import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
// import { LoginForm } from '../Components/login_form'
import ProfileHeader  from '../Components/profile_header';
import ProfileGroup  from '../Components/profile_group_list';

class UserShowScene extends React.Component {
  static navigationOptions = {
    title: "Profile Page"
  };
  constructor() {
    super();
    this.state = { user: {
      firstName: "",
      lastName: "",
      groups: []
    }}
  }

  componentWillMount = function() {
    fetch("http://localhost:3000/users/7",
          {method: 'GET'}
        ).then((response) => response.json()
      ).then((responseJson) => {this.setState(
          {user: {
            firstName: responseJson.user.first_name,
            lastName: responseJson.user.last_name,
            groups: responseJson.user_groups}
          })
      })
  }

  render(){
    const { user } = this.state
    return(
    <View>
      <ProfileHeader userName={user.firstName}/>
      <ProfileGroup groups={user.groups}/>
    </View>
    )
  }
}

export default UserShowScene ;
