import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Text,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import GroupForm from './new_group_form';
import { StackNavigator } from 'react-navigation';

class ProfileHeader extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {backgroundColor: '#F7F9FB'}
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text> Hi {this.props.userName}!</Text>
        <TouchableHighlight>
          <Text onPress={() => navigate('GroupNewScene')}>Create New Squad: button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const splittr = StackNavigator({
  GroupForm: {
    screen: GroupForm,
  },
});
const styles = StyleSheet.create({
  
})

export default ProfileHeader;
