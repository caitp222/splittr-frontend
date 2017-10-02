import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { LoginForm } from '../Components/login_form'
import LinearGradient from 'react-native-linear-gradient';

class LoginScene extends Component {
  static navigationOptions = {
    title: 'Login Here',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  render(){
    const { navigation } = this.props;
    return(
  <LinearGradient colors={['#83a4d4', '#b6fbff']} style={styles.linearGradient}>
    <View>
      <LoginForm navigation={navigation}/>
    </View>
  </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default LoginScene;
