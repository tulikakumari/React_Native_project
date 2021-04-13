 
import React from 'react'
 import List from './List.js'
// import {View,Text} from 'react-native';
// import {Card} from 'react-native-paper';



// export default class App extends Component{
//   constructor(props)
//   {
//     super(props)

//     this.state = {
//       CryptoList:[
//         {
//            id: 0,
//           //  imgUrl: '',
//           name: 'Bitcoin',
//        },
//        {
//           id: 1,
//           // imgUrl:'',
//           name: 'Ethereum',
//        },
//        {
//           id: 2,
//           // imgUrl:'',
//           name: 'Binance Coin',
//        },
//        {
//           id: 3,
//           // imgUrl:'',
//           name: 'XRP',
//        },
//        {
//           id: 4,
//           // imgUrl:'',
//           name: 'Tether',
//        },
//        {
//           id: 5,
//           // imgUrl:'',
//           name: 'Cardano',
//        },
//        {
//           id: 6,
//           // imgUrl:'',
//           name: 'Polkadot',
//        },
//        {
//            id:7,
//           //  imgUrl:'',
//            name: 'Uniswap',
//        }

//       ]
//     }
//   }
//       render()
//       {
//         return (
//           <View style={{flex:1 , padding:5}}>
//               <List
//                   data = {this.state.CryptoList}
//                   renderItem = {({item})=>{
//                       <Card>
//                         <View style={{flex:1, flexDirection:'row',padding:10}}>
//                           <Text>{item.id}</Text>
//                           <Text>{item.name}</Text>
//                         </View>
//                       </Card>
//                   }
                
//                 }
//                 keyExtractor = {item=>item.id}
//               />
//           </View>
//         )
//       }
// }

const App = () => {
   return (
      <List />
   )
}
export default App





// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Button from 'react-native'
// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       <Text>Hello world</Text>
//       <Text>Hello world</Text>
//       <Text>Hello world</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// // export default class App extends React.Component {
// //   constructor(props){
// //     super(props);
// //     this.state = {
// //     name: 'World!',
// //     }
// //   }
// //   onClick = () => {
// //     this.setState({
// //     name: 'John!',
// //     })
// //   };
// //   render() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Hello {this.state.name}</Text>
// //       <Button 
// //            onPress={() => {this.onClick()}} 
// //            title='Click me'
// //            color='#4169E1'>
// //       </Button>
// //     </View>
// //   );
// //   }
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   }, 
// //   nameText: {
// //     fontSize: 50,
// //     padding: 15,
// //   }
// // });