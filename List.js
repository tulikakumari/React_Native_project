import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Bitcoin',
         },
         {
            id: 1,
            name: 'Ethereum',
         },
         {
            id: 2,
            name: 'Binance Coin',
         },
         {
            id: 3,
            name: 'XRP',
         },
         {
            id: 4,
            name: 'Tether',
         },
         {
            id: 5,
            name: 'Cardano',
         },
         {
            id: 6,
            name: 'Polkadot',
         },
         {
             id:7,
             name: 'Uniswap',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View style={{flex:1,flexDirection:row,padding:10}}>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
