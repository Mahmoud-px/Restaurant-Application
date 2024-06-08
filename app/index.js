import { Button, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import pizzaLogo from '../assets/images/Pizzalogo.png'



const Index = () => {

  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={pizzaLogo}/>
        <Text style={styles.welcome}> Welcome to <Text style={styles.planet}>Pizza Planet !</Text> </Text>
        <Link style={styles.link} replace href='/menu'>Explore Menu</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'orange'
  },
  logo:{
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  welcome:{
    marginBottom: 30,
    fontSize: 26,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'white'
  },
  planet:{
    fontWeight: '900',
    color: 'red'
  },
  link:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'orangered',
    overflow: 'hidden',
  }
});




export default Index
