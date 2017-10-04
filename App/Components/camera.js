// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Dimensions,
//   StyleSheet,
//   Button,
//   Text,
//   TouchableHighlight,
//   View
// } from 'react-native';
// import Camera from 'react-native-camera';
//
// class CameraAccess extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Camera
//           ref={(cam) => {
//             this.camera = cam;
//           }}
//           style={styles.preview}
//           aspect={Camera.constants.Aspect.fill}
//           captureTarget={Camera.constants.CaptureTarget.memory}>
//           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
//         </Camera>
//       </View>
//     );
//   }
//
//   takePicture() {
//     const options = {};
//     alert("h1");
//     //options.location = ...
//     this.camera.capture({metadata: options})
//     .then(function(response) {
//       const data = response;
//       fetch("http://localhost:3000/expenses/camera",
//       {method: 'post',
//       headers: {
//         'Accept':'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({data})
//     }).then(function(response) {
//       console.log(response)
//     })
//
//     // debugger;
//     // console.log(response)
//   })
//
//
//
//
//
//   //     .then(function() {
//   //       fetch("http://localhost:3000/expenses/camera",
//   //             {method: 'post',
//   //              body: JSON.stringify({ params:1 })
//   //           }
//   //         }).then(function())
//   //             (data) => console.log(data)
//   //           )
//   //           .then((response) => response.json())
//   //           .then((data) => console.log('data', data))
//   //     )
//   //     .catch(err => console.error(err));
// }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     color: '#000',
//     padding: 10,
//     margin: 40
//   }
// });
//
// export default CameraAccess ;
