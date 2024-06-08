import { Button, FlatList, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import {images} from './menu'
import {pizzaList} from '../data/pizzaList'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart} from '../redux/cartSlice'
import { useEffect } from "react";



const cart = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.data.items)

  useEffect(()=>{
    console.log('cart data: ', data)
  },[data])

  const remove = (item) =>{
    dispatch(removeFromCart(item))
  }

  const totalPrice = data.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =>(
          <View style={styles.box}>
            <Image style={styles.Image} source={pizzaList[item.id - 1].image}/>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.button} onPress={() => remove(item)}>Remove from Cart</Text>
            </View>
          </View>
        )}  
      />
      <View style={styles.checkBox}>
        <Text style={styles.totalText}>Total Price: <Text style={styles.totalNumber}>${totalPrice}</Text> </Text>
        <Text disabled style={styles.checkButton}>Check Out</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
    paddingBottom: 20,
  },
  box:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    marginRight: 5,
  },
  Image:{
    width: 200,
    height: 165,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  info:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
  },
  name:{
    fontSize: 20,
    fontWeight: '600',
    color: 'black'
  },
  description:{
    fontSize: 16,
    fontWeight: 400,
    color: 'rgb(50, 50, 50)'
  },
  price:{
    fontSize: 14,
    fontWeight: 400,
    color: 'rgb(125, 125, 125)'
  },
  button:{
    width: '100%',
    height: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  checkBox:{
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: 'rgb(200, 200, 200)'
  },
  totalText:{
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(100, 100, 100)',
  },
  totalNumber:{
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  checkButton:{
    width: '75%',
    height: 'auto',
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'green',
    overflow: 'hidden',
  }
})

export default cart