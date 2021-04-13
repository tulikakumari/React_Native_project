import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     name: 'World!',
//     }
//   }
//   onClick = () => {
//     this.setState({
//     name: 'John!',
//     })
//   };
//   render() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello {this.state.name}</Text>
//       <Button 
//            onPress={() => {this.onClick()}} 
//            title='Click me'
//            color='#4169E1'>
//       </Button>
//     </View>
//   );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }, 
//   nameText: {
//     fontSize: 50,
//     padding: 15,
//   }
// });