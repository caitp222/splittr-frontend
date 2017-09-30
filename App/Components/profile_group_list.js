import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  Text,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation'

class ProfileGroup extends Component {
  render() {
    return(
      <View>
        {this.props.groups.map(function(group, index){
          return (
            <Button
              key={index}
              title= {group.group_name}
              onPress = {() =>
              console.log("hi")}
            />
          )
        })}
      </View>
    );
  }
}

export default ProfileGroup;
