import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,Image,ImageBackground } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            symbol:'BTCUSDT',
            imageUrl:"https://localbitcoinnow.com/wp-content/uploads/2019/12/The-bit-logo-e1575819611411.png",
            name: 'Bitcoin',
            price:'$63.188.88',
            Mcap:'MCap $1.18 T',
         },
         {
            id: 1,
            symbol:'ETHUSDT',
            imageUrl:"https://media.istockphoto.com/photos/stack-of-ether-coins-with-gold-background-picture-id901948904?s=612x612",
            name: 'Ethereum',
            price:'$2338.80',
            Mcap:'MCap $265.54 Bn',
         },
         {
            id: 2,
            symbol:'BNBUSDT',
            imageUrl:"https://thumbs.dreamstime.com/z/coin-cryptocurrency-bnb-golden-background-binance-gold-fabric-144055342.jpgttps://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

            name: 'Binance Coin',
            price:'$580.40',
            Mcap:'MCap $86.74 Bn',
         },
         {
            id: 3,
            symbol:'XRPUSDT',
            imageUrl:"https://st3.depositphotos.com/1454700/16509/i/1600/depositphotos_165093786-stock-photo-cryptocurrency-physical-coin.jpghttps://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

            name: 'XRP',
            price: '$1.200',
            Mcap:'MCap $82.514 Bn',
         },
         {
            id: 4,
            symbol:'BNTUSDT',
            imageUrl:"https://image.shutterstock.com/image-illustration/stack-four-golden-tether-usdt-600w-773287876.jpg",
           
            name: 'Tether',
            price:'$1000',
            Mcap:'MCap $45.417 Bn',
         },
         {
            id: 5,
            symbol:'ADAUSDT',
            imageUrl:"https://blockchainstock.blob.core.windows.net/article/E2D0F576946C39229347F83C8328640A1FFAA0550F3247FDB1335236F2D2B8C8.jpg",

            name: 'Cardano',
            price:'$1.400',
            Mcap:'MCap $45.060 Bn',
         },
         {
            id: 6,
            symbol:'DOTUSDT',
            imageUrl:"https://image.shutterstock.com/display_pic_with_logo/320779/1912107250/stock-photo-polkadot-cryptocurrency-coin-gold-d-rendered-coin-with-polkadot-symbol-isolated-on-white-1912107250.jpg",

            name: 'Polkadot',
            price: '$42.00',
            Mcap:'MCap $39.73 Bn',
         },
         {
             id:7,
             symbol:'UNIUSDT',
             imageUrl:"https://image.freepik.com/free-photo/uniswap-logo-digital-art-cryptocurrency-symbol-futuristic-3d-illustration-crypto-background_195742-457.jpg",
             name: 'Uniswap',
             price: '$35.90',
             Mcap:'MCap $18.55 Bn',
         }
      ]
   }
   componentDidMount = () => {
      
      fetch('https://api.binance.com/api/v3/ticker/price', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         var newStateNames = this.state.names
         for(var i=0;i<newStateNames.length;i++)
         {
              var sym = newStateNames[i].symbol;
              var result = responseJson.filter(obj => {
               return obj.symbol == sym
             })
             console.log('symbol ---' + result[0].symbol + result[0].price)

             newStateNames[i].price = result[0].price

         }
         console.log('dataaaaa newww - ' + newStateNames)

         this.setState({
            names: newStateNames
         })

         
         
         
         // console.log(responseJson[0].price);
      })
      .catch((error) => {
         console.error(error);
      });
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
                     <Text style = {styles.text3}>
                        {item.Mcap}
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
        marginLeft:30,
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
        margin:'top',
           textAlign:'right'
   },
   text3:{
       marginBottom:0,
       textAlign:'right',
   }
})
