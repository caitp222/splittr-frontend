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

class ExpenseNewScene extends Component {static navigationOptions = {
  title: 'Bitch better have my money',
  headerStyle: {backgroundColor: '#F7F9FB'}
};
  render() {
    const { expense } = this.props
    const { navigate } = this.props.navigation
    return(
      <View>
        <LinearGradient colors={['#b6fbff', '#83a4d4']} style={styles.linearGradient}>
          <TouchableHighlight style={styles.scanButton} onPress={() => navigate('Camera')}>
            <Text style={styles.scanText}>Scan Recipe</Text>
          </TouchableHighlight>
          <ExpenseForm  />
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
