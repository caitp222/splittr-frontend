import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';


class Register extends React.Component {
  static navigationOptions = {
    title: 'Join Our Family',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text> Register </Text>
      // <Button
      //   title="Register"
      //   onPress={() =>
      //     navigate('Profile', { name: 'Jane' })
      //   }
      // />
    );
  }
}
export default Register;
