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
  constructor(){
    super();
    this.state ={
      groups: [
      { groupName: "The Lanisters" },
      { groupName: "The Starks" },
      { groupName: "The Targaryen" },
    ]};
  }

  render() {
    return(
      <View>
        {this.state.groups.map(function(group, index){
          return (
            <Button
              key={index}
              title= {group.groupName}
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
