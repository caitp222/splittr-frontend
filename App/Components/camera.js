import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class CameraAccess extends Component {
  constructor() {
    super();

  }
  takePicture() {
    const options = {};
    alert("h1");
    const handleOnChange = this.props.navigation.state.params.handleOnChange
    const navigation = this.props.navigation
    const groupId = this.props.navigation.state.params.groupId
    const userId = this.props.navigation.state.params.userId
    console.log("userid " + userId)
    //options.location = ...
    this.camera.capture({metadata: options})
    .then(function(response) {
      const data = response;
      const url = "http://localhost:3000/expenses/camera"
      //const url = "https://rocky-forest-46725.herokuapp.com/expenses/camera"
      fetch(url,
      {method: 'post',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    }).then(function(response) {
      return response.json() }
  ).then(function(responseJson) {
      handleOnChange(responseJson.total, groupId, userId)
      // navigation.navigate('Expense', {groupId: groupId})
      navigation.goBack()
    })
  })
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.memory}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default CameraAccess ;
