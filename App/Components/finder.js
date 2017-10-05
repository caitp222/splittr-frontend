import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import Member from './member';

class AddNewMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      groupId: this.props.groupId
    }
  }

  addMembership = () => {

    const user = this.state;
    // const url = "http://localhost:3000/memberships";
    const url = "https://rocky-forest-46725.herokuapp.com/memberships"
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
    .then((responseJson) => this.addMember(responseJson))
  }


  addMember = (group)=> {
    this.props.findGroup(group)
  }

  render(){
    const { groupId } = this.props;
    const { navigate } = this.props.navigation;
    return(
    <View>
      <TextInput name="email"
        autoCapitalize={false}
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
      />
      <TouchableHighlight >
        <Text style={styles.label} onPress = {this.addMembership}>Find Friend</Text>
      </TouchableHighlight>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    paddingTop:10,
    backgroundColor: "transparent",
    height: 35,
    color: 'black'
  },
  input: {
    backgroundColor: "transparent",
    height: 30,
    color: '#666666',
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
})
export default AddNewMember ;
