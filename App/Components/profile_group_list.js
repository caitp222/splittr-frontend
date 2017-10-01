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
import { StackNavigator } from 'react-navigation'
import { NavigationActions } from 'react-navigation'

class ProfileGroup extends Component {
  render() {
    const { navigation, groups } = this.props;
    return(
      <View>
        <Text> Your Groups </Text>
        {groups.map(function(group, index){
          return (
            <TouchableHighlight key={index}>
              <Text onPress = {() => navigation.navigate('GroupShow', {group_id: group.id})}>{group.group_name}: button</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    );
  }
}

export default ProfileGroup;
