import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import ExpenseForm from '../Components/new_expense_form.js'
import LinearGradient from 'react-native-linear-gradient';
import Camera from '../Components/camera.js';

class ExpenseNewScene extends Component {
  render() {
    const { expense } = this.props
    const { navigation } = this.props
    return(
      <View>
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={styles.linearGradient}>
          <TouchableHighlight style={styles.scanButton} onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.scanText}>Scan Receipt</Text>
          </TouchableHighlight>
          <ExpenseForm navigation={navigation} />
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
