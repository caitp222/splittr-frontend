import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import  MemberList from '../Components/member_list';
import LinearGradient from 'react-native-linear-gradient';
import ExpenseForm from './expenses_new.ios.js';
import { StackNavigator } from 'react-navigation';
import AddNewMember from '../Components/finder.js'

const styles = StyleSheet.create({
  background: {
  backgroundColor: 'transparent',

  },
  linearGradient: {
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  groupHeader:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 2.5,
    //marginBottom:2
  },
  details: {
    textAlign: 'center',
    fontSize: 15,
    marginTop:2,
    marginBottom: 30
  },
  sumBox: {
    marginTop:5,
    marginBottom: 5,
    flexDirection: 'column',
  },
  membersList: {
    padding : 5,
    textAlign: 'center',
    fontSize: 30,
    marginTop:5,
    marginBottom: 15,
  },
  sumHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sumContainer: {
    flexDirection: 'column',
    margin: "-5%",
    marginLeft: "5%"
  },
  button: {
    marginTop:5,
    padding: 5,
    // marginRight: 5,
    marginLeft: "-20%",
  },
  expenseHeader: {
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#8BBFC2'
  },
  settleText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  settleButton:{
    backgroundColor: '#83a4d4',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8BBFC2',
    marginBottom:50
  },
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  }
})

class GroupShowScene extends Component {
  constructor() {
    super();
    this.state = {group: {
      groupName: "",
      details: "",
      settledUp: false,
    }, totalSpend: 0,
       memberSplit: 0,
       members: []
     }
   }

   findGroup = (group) => {
     this.setState({
       group: {
         groupName: group.group.group_name,
         details: group.group.details,
         settledUp: group.group.settled_up
       },
       totalSpend: group.total_spend,
       memberSplit: group.member_split,
       members: group.members})
   }


  componentWillMount = function() {
    const id = this.props.navigation.state.params.groupId
    //const url = "https://rocky-forest-46725.herokuapp.com/groups/"
    const url = "http://localhost:3000/groups/"
    const fetchUrl = url + id;
    fetch(fetchUrl,
      {method: 'GET'}
    ).then((response) => response.json()
  ).then((responseJson) => {this.setState({
    group: {
      groupName: responseJson.group.group_name,
      details: responseJson.group.details,
      settledUp: responseJson.group.settled_up
    },
    totalSpend: responseJson.total_spend,
    memberSplit: responseJson.member_split,
    members: responseJson.members
  })})
  }

  settleUpHandler = function() {
    const { group } = this.state
    // const url = "https://rocky-forest-46725.herokuapp.com/groups/"
    const url = "http://localhost:3000/groups/"
    const id = this.props.navigation.state.params.groupId
    fetch(url + id + "/settle", {
      method: 'POST'
    }).then((response) => response.json()
  ).then(function(responseJson) {
    alert(responseJson.message);
    group.settledUp = true;
    this.setState({group: group})
    console.log(this.state)
  }.bind(this)
    )
  }

  settleUpHandler = this.settleUpHandler.bind(this);

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props
    const id = this.props.navigation.state.params.groupId;
    if(this.state.group.settledUp === false){
      return(
        // <ScrollView style={{flex: 1}}>
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={styles.linearGradient}>
          <View style={styles.container}>
            <View>
              <View>
                <Text style={styles.groupHeader}>{this.state.group.groupName}</Text>
                <Text style={styles.details}>{this.state.group.details}</Text>
              </View>
              <View style={styles.sumHeader}>
                <View style={styles.sumContainer}>
                  <View style={styles.sumBox}>
                    <Text style={styles.expenseHeader}>Group Spent</Text>
                    <Text>${this.state.totalSpend}</Text>
                  </View>
                  <View style={styles.sumBox}>
                    <Text style={styles.expenseHeader}>Member Split</Text>
                    <Text>${this.state.memberSplit}</Text>
                    <Text style={styles.membersList}>Member Expenses:</Text>
                  </View>
                </View>
                <TouchableHighlight style={styles.button} onPress={() => navigate('Expense', {groupId: id})}>
                  <Text style={styles.buttonText}>Add Expense</Text>
                </TouchableHighlight>

              </View>
              </View>
              </View>
              <ScrollView >
                <MemberList settledUp={this.state.group.settledUp} groupId={id} members={this.state.members} navigate={ navigate }/>
              </ScrollView>

              <View>
                <AddNewMember groupId={id} navigation={navigation} findGroup={this.findGroup}/>
              </View>

              <View style={styles.footer}>
                <TouchableHighlight style={styles.settleButton} onPress={this.settleUpHandler}>
                  <Text style={styles.settleText}>Settle up</Text>
                </TouchableHighlight>
              </View>
        </LinearGradient>
          // </ScrollView>
      )
    } else if(this.state.group.settledUp === true) {
      return(
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={styles.linearGradient}>
          <View style={styles.container}>
            <View>
              <View>
                <Text style={styles.groupHeader}>{this.state.group.groupName}</Text>
                <Text style={styles.details}>{this.state.group.details}</Text>
              </View>
              <View style={styles.sumHeader}>
                <View style={styles.sumContainer}>
                  <View style={styles.sumBox}>
                    <Text style={styles.expenseHeader}>Group Spent</Text>
                    <Text>${this.state.totalSpend}</Text>
                  </View>
                  <View style={styles.sumBox}>
                    <Text style={styles.expenseHeader}>Member Split</Text>
                    <Text>${this.state.memberSplit}</Text>
                  </View>
                </View>
              </View>
              <MemberList settledUp={this.state.group.settledUp} groupId={id} members={this.state.members} navigate={ navigate }/>
              </View>
          </View>
        </LinearGradient>
      )
    }
  }
}

export default GroupShowScene;
