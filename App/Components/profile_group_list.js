import React, {Component} from 'react';
import {
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Text,
  AppRegistry,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { NavigationActions } from 'react-navigation'

class ProfileGroup extends Component {
  render() {
    const { navigation, groups } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <Text style={styles.group}>Your Groups</Text>
        <ScrollView style={{flex: 3}}>
          <View>
            {groups.map(function(group, index){
              return (
                <TouchableHighlight style={styles.list}>
                  <Text
                    style={styles.text}
                    key={index}
                    onPress = {() => navigation.navigate('GroupShow', {group_id: group.id})}>{group.group_name}</Text>
                </TouchableHighlight>
              )
            })}
        </View>
      </ScrollView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#AAA0A0',
    borderRadius: 700,
    marginRight: 70,
    marginLeft: 70,
    opacity: .80,
  },
header:{
  justifyContent: 'center',
  backgroundColor: 'transparent',
  fontSize: 15,
  color:'#F7F9FB',
  fontWeight: '400',
},
group: {
  padding:10,
  color:'#F7F9FB',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 20,
  backgroundColor: 'transparent',

},
text:{
  padding:5,
  fontSize: 15,
  color:'#F7F9FB',
  fontWeight: '800',
  opacity: 1,
  }
})

export default ProfileGroup;
