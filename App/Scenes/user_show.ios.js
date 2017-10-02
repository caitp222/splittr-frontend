import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  AsyncStorage
} from 'react-native';
// import { LoginForm } from '../Components/login_form'
import ProfileHeader  from '../Components/profile_header';
import ProfileGroup  from '../Components/profile_group_list';
import LinearGradient from 'react-native-linear-gradient';
import { Tabs } from '../Components/router.js';

class UserShowScene extends React.Component {
  static navigationOptions = {
    title: 'SHOW UP ALREADY!!!',
    headerStyle: {backgroundColor: '#F7F9FB'}
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
    AsyncStorage.getItem('sessionId', (err, result) => {
      const userId = result;
      const url = "http://localhost:3000/users/";
      const fetchUrl = url + 9
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
    const { navigation } = this.props
    return(
      <LinearGradient colors={['#83a4d4', '#b6fbff']} style={styles.linearGradient}>
      <View>
        <Image
        style={styles.backdrop}
        source={require('../../ocean.jpg')}>
        <ProfileHeader userName={user.firstName} navigation={navigation}/>
        </Image>
        <ProfileGroup groups={user.groups} navigation={navigation}/>
        </View>
      </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
  backdrop: {
    width: '100%',
    height: '25%',
  },
  linearGradient: {
    height: "100%",
  },
});
export default UserShowScene ;
