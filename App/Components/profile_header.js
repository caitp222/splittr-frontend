import React, {Component} from 'react';
import { TextInput,
         View,
         Button,
         Text,
       } from 'react-native';
import GroupForm from './new_group_form';
import { StackNavigator } from 'react-navigation';

class ProfileHeader extends Component {
  constructor() {
    super();
    this.state = {user: {
      firstName: "First Name",
      lastName: "Last Name",
      groupNames: "Name",
    }};
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text>Princess</Text>
        <Text>Rebecca</Text>
        <Button
          title="Create Group"
          color="#841584"
          accessibilityLabel="Create New Group"
          onPress={() =>
            navigate('GroupForm')}
        />
      </View>
    )
  }
}

const splittr = StackNavigator({
  GroupForm: {
    screen: GroupForm,
  },
});

export default ProfileHeader;


{/* return(
  <View>
    <Text>firstName:</Text>
    <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
  value={this.state.expense.vendor} onChangeText={this.onChangeVendor}/>
  <Text>lastName:</Text>
  <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    value={this.state.expense.vendor} onChangeText={this.onChangeVendor}/>
    <Button
        onPress={"h1"}
        title="Create Group"
        color="#841584"
        accessibilityLabel="Create New Group"/>

  </View> */}
