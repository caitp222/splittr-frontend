import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import  MemberList from '../Components/member_list';
import LinearGradient from 'react-native-linear-gradient';

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
    marginTop:15,
    marginBottom:2
  },
  details: {
    textAlign: 'center',
    fontSize: 15,
    marginTop:2,
    marginBottom: 30
  },
  sumBox: {
    marginTop:10,
    marginBottom: 10,
    flexDirection: 'column'
  },
  membersList: {
    textAlign: 'center',
    fontSize: 20,
    marginTop:10,
    marginBottom:2
  },
  sumHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sumContainer: {
    flexDirection: 'column'
  },
  button: {
    backgroundColor: '#83a4d4',
    paddingTop: 35,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8BBFC2'
  },
  expenseHeader: {
    fontWeight: 'bold'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20
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


  componentWillMount = function() {

    const id = this.props.navigation.state.params.groupId
    console.log(id)
    // const url = "https://rocky-forest-46725.herokuapp.com/groups/"
    const url = "http://localhost:3000/groups/"
    const fetchUrl = url + id;
    fetch(fetchUrl,
      {method: 'GET'}
    ).then((response) => response.json()
  ).then((responseJson) => {this.setState({
    group: {
      groupName: responseJson.group.group_name,
      details: responseJson.group.details,
      settledUp: responseJson.group.settle_up
    },
    totalSpend: responseJson.total_spend,
    memberSplit: responseJson.member_split,
    members: responseJson.members
  })})
  }

  render() {
    const { navigate } = this.props.navigation;
    const id = this.props.navigation.state.params.groupId;
    return(
      <LinearGradient colors={['#b6fbff', '#83a4d4']} style={styles.linearGradient}>
        <View style={styles.background}>
          <Text style={styles.groupHeader}>{this.state.group.groupName}</Text>
          <Text style={styles.details}>{this.state.group.details}</Text>
          <View style={styles.sumHeader}>
            <View style={styles.sumContainer}>
              <View style={styles.sumBox}>
                <Text style={styles.expenseHeader}>Group Spent:</Text>
                <Text>${this.state.totalSpend}</Text>
              </View>
              <View style={styles.sumBox}>
                <Text style={styles.expenseHeader}>Member Split:</Text>
                <Text>${this.state.memberSplit}</Text>
              </View>
            </View>
            <TouchableHighlight style={styles.button} onPress={() => navigate('CameraAcc')}>
              <Text style={styles.buttonText}>Add Expense</Text>
            </TouchableHighlight>
          </View>
          <MemberList groupId={id} members={this.state.members} navigate={ navigate }/>

        </View>
      </LinearGradient>
    )
  }
}

export default GroupShowScene;
