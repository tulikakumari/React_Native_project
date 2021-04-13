import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,Image,ImageBackground } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            imageUrl:"https://localbitcoinnow.com/wp-content/uploads/2019/12/The-bit-logo-e1575819611411.png",
            name: 'Bitcoin',
            price:'678',
         },
         {
            id: 1,
            imageUrl:"https://media.istockphoto.com/photos/stack-of-ether-coins-with-gold-background-picture-id901948904?s=612x612",
            name: 'Ethereum',
            price:'2338',
         },
         {
            id: 2,
            imageUrl:"https://thumbs.dreamstime.com/z/coin-cryptocurrency-bnb-golden-background-binance-gold-fabric-144055342.jpgttps://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

            name: 'Binance Coin',
            price:'580',
         },
         {
            id: 3,
            imageUrl:"https://st3.depositphotos.com/1454700/16509/i/1600/depositphotos_165093786-stock-photo-cryptocurrency-physical-coin.jpghttps://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

            name: 'XRP',
            price: '120',
         },
         {
            id: 4,
            imageUrl:"https://image.shutterstock.com/image-illustration/stack-four-golden-tether-usdt-600w-773287876.jpg",

            name: 'Tether',
            price:'600',
         },
         {
            id: 5,
            imageUrl:"https://blockchainstock.blob.core.windows.net/article/E2D0F576946C39229347F83C8328640A1FFAA0550F3247FDB1335236F2D2B8C8.jpg",

            name: 'Cardano',
            price:'400',
         },
         {
            id: 6,
            imageUrl:"https://image.shutterstock.com/display_pic_with_logo/320779/1912107250/stock-photo-polkadot-cryptocurrency-coin-gold-d-rendered-coin-with-polkadot-symbol-isolated-on-white-1912107250.jpg",

            name: 'Polkadot',
            price: '200',
         },
         {
             id:7,
             imageUrl:"https://image.freepik.com/free-photo/uniswap-logo-digital-art-cryptocurrency-symbol-futuristic-3d-illustration-crypto-background_195742-457.jpg",
             name: 'Uniswap',
             price: '500',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     {/* <Image style={styles.tinyLogo} source={{item.imageUrl}}/> */}
                     <Image
                       style={styles.tinyLogo}
                       source={{
                       uri: item.imageUrl,
                        }}
                      />
                     <Text style = {styles.text1}>
                        {item.name}
                     </Text>
                     <Text style = {styles.text2}>
                        {item.price}
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
      marginTop: 30,
      backgroundColor: 'white',
    //    alignItems: 'center',
   },
   tinyLogo:{
        width:30,
        height:30,
        position:'absolute',
        left:0,
        padding:20,
        borderRadius:30
   },
   text1: {
      color: '#4f603c',
      textAlign:'center'
    //   alignContent:'center'
   },
   text2:{
    //    alignItems:'right'
       textAlign:'right'
   }
})
