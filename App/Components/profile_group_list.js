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
  render() {
    const { navigation, groups } = this.props;
    return(
      <View>
        <Text> Your Groups </Text>
        {groups.map(function(group, index){
          return (
            <TouchableHighlight>
              <Text key={index} onPress = {() => navigation.navigate('GroupShow')}>{group.group_name}: button</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    );
  }
}

// StackNavigator({
//   GroupShow: {
//     screen: GroupShowScene,
//   }
// });

export default ProfileGroup;
