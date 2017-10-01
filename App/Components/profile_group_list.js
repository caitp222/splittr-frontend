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
import  GroupShowScene  from '../Scenes/group_show.ios.js'

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
            <TouchableHighlight onPress={() => navigate('GroupShow')}>
              <Text key={index} onPress = {() =>
              console.log("Placeholder")}>{group.groupName}: button</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    );
  }
}

StackNavigator({
  GroupShow: {
    screen: GroupShowScene,
  }
});

export default ProfileGroup;
