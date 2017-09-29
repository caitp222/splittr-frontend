import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text> Lets get you logged in</Text>
      // <Button
      //   title="Login "
      //   onPress={() =>
      //     navigate('Profile', { name: 'Jane' })
      //   }
      // />
    );
  }
}
export default Login;
