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

class UserShowScene extends React.Component {
  render(){
    return(
    <View>
      <ProfileHeader />
      <Text>User Show Scene</Text>
    </View>
    )
  }
}

export default UserShowScene ;
