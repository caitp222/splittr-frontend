import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  AsyncStorage
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
    const userId = AsyncStorage.getItem('sessionId', (err, result) => {
      const userId = result;
      const url = "http://localhost:3000/users/";
      const fetchUrl = url + parseInt(userId)
      fetch(fetchUrl,
            {method: 'GET'}
          ).then(function(response) { return response.json();
          }
        ).then((responseJson) => { console.log(responseJson);
          this.setState(
            {user: {
              firstName: responseJson.user.first_name,
              lastName: responseJson.user.last_name,
              groups: responseJson.user_groups}
            })
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
