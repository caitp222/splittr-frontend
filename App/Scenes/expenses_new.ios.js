import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import ExpenseForm from '../Components/new_expense_form.js'
import LinearGradient from 'react-native-linear-gradient';
import Camera from '../Components/camera.js';

class ExpenseNewScene extends Component {
  constructor() {
    super();
    this.state = {expense: {
      description: "",
      amount: 0,
      vendor: "",
      user_id: 0,
      group_id: 0
    }};
    this.handleOnChangeCamera = this.handleOnChangeCamera.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  handleOnChangeCamera(amount, groupId){
    let expense = this.state.expense
    expense.amount = amount
    expense.group_id = groupId
    AsyncStorage.getItem('sessionId', (err, result) => {
      var resultInt = parseInt(result);
      console.log(resultInt);
      expense.user_id = resultInt
    })
    console.log('***********************')
    console.log(expense)
    // console.log(AsyncStorage.getItem('sessionId'))
    // console.log('***********************')
    // console.log(parseInt(AsyncStorage.getItem('sessionId')))
    this.setState({expense: expense})
  }

  handleInputChange(name, event) {
    console.log('******')
    let expense = this.state.expense;
    // debugger
    expense[name] = event.nativeEvent.text;
    this.setState({expense: expense})
  }

  handleButtonPress() {
    alert("hi!")
    const expense = this.state.expense;
    const navigation = this.props.navigation;
    const groupId = this.state.expense.group_id
    console.log(groupId)
    const url = "http://localhost:3000/groups/" + groupId + "/expenses"
    //const url = "https://rocky-forest-46725.herokuapp.com/groups/" + groupId + "/expenses"
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({expense})
    }).then(function() {
      navigation.navigate("GroupShow", {groupId: groupId})
    })
  }

  render() {
    // const { expense } = this.props
    const { navigation } = this.props
    // const amount = parseFloat(this.state.totalAmount).toFixed(2)
    return(
      <View>
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={styles.linearGradient}>
          <TouchableHighlight style={styles.scanButton} onPress={() => navigation.navigate('Camera', {handleOnChange: this.handleOnChangeCamera, groupId: this.props.navigation.state.params.groupId, userId: this.state.expense.user_id})}>
            <Text style={styles.scanText}>Scan Receipt</Text>
          </TouchableHighlight>
          <ExpenseForm navigation={navigation} expense={this.state.expense} handleInputChange={this.handleInputChange} handleButtonPress={this.handleButtonPress} />
        </LinearGradient>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
  },
  background: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  button: {
    backgroundColor: '#00ff00',
    fontWeight: 'bold',
  },
  scanButton:{
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8BBFC2',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    color: '#666666'
  },
  scanText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#666666'
  }
});
export default ExpenseNewScene;
