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
    title: 'Khaleesi',
  };
  render(){
    return(
    <View>
      <ProfileHeader />
      <Text>User Show Scene</Text>
      <ProfileGroup />
    </View>
    )
  }
}

export default UserShowScene ;
