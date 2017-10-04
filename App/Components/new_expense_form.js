import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { TextInput,
  StyleSheet,
  TouchableHighlight,
  View,
  Button,
  Text,
  AsyncStorage
} from 'react-native';

class ExpenseForm extends Component {
  render() {
    return(
      <View>
        <View style={styles.container}>
          <Text style={styles.label}>Vendor</Text>
          <TextInput
            style={styles.input}
            name="vendor"
            onChange={(evt) => this.props.handleInputChange('vendor',evt)}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput name="description"
            style={styles.input}
            onChange={(evt) => this.props.handleInputChange('description',evt)} />
            <Text style={styles.label}>Amount</Text>
            <TextInput name="amount"
              style={styles.input}
              onChange={(evt) => this.props.handleInputChange('amount',evt)} value={this.props.expense.amount}/>

              <TouchableHighlight onPress={this.props.handleButtonPress}>
                <Text style={styles.confirm}>Confirm Expense</Text>
              </TouchableHighlight>
            </View>
          </View>
        )
      }
    }
    const styles = StyleSheet.create({
      container: {
        marginLeft: 25,
        marginRight:25,
        paddingTop:30
      },
      label: {
        paddingTop:10,
        backgroundColor: "transparent",
        height: 35,
        color: '#666666'
      },
      input: {
        backgroundColor: "transparent",
        height: 30,
        color: '#666666',
        borderBottomColor: "#666666",
        borderBottomWidth: 1
      },
      confirm:{
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#666666",
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        color: '#666666',
        textAlign: "center",
        fontSize: 25
      }
    });

    export default ExpenseForm;
