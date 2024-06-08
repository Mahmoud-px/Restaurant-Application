import { ScrollView, Text, View , Modal, SafeAreaView, Button, FlatList, Image, StyleSheet, TouchableOpacity} from "react-native"
import { Link } from "expo-router"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart} from '../redux/cartSlice'
import {pizzaList} from '../data/pizzaList'



const menu = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.data.items)

  useEffect(()=>{
    console.log('menu data: ', data)
  },[data])

  const add = (item) =>{
    dispatch(addToCart(item))
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={pizzaList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =>(
          <View style={styles.box}>
            <Image style={styles.Image} source={item.image}/>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.button} disabled={data.some(dataItem => dataItem.id === item.id)} onPress={() => add(item)}>Add To Cart</Text>
            </View>
          </View>
        )}  
      />
    </View>
  )
}


const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
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
    // paddingVertical: 5,
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
    backgroundColor: 'orange',
    overflow: 'hidden',
  },
})


export default menu