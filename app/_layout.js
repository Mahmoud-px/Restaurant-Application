import { Provider } from 'react-redux';
import store from '../redux/store';
import { Stack } from 'expo-router';
import { useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';



const Layout = () => {

    const router = useRouter();
    
    return (
        <Provider store={store}>
            <Stack screenOptions={{headerShown: false, animation: "fade"}}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="menu" options={{headerShown: true, headerTitle: 'Menu', headerTitleAlign:'center', headerTintColor: 'white', headerStyle: {backgroundColor: 'orangered'}, headerTitleStyle:{fontSize: 24, fontWeight: '700'}, headerRight: ()=> <AntDesign name="shoppingcart" size={28} color="black" onPress={()=> router.navigate("/cart")}/>}} />
                <Stack.Screen name="cart" options={{headerShown: true, headerTitle: 'Cart', headerTitleAlign:'center', headerTintColor: 'white', headerStyle: {backgroundColor: 'black'}, headerTitleStyle:{fontSize: 24, fontWeight: '700'}, presentation: 'modal', animation: 'slide_from_bottom'}}/>
            </Stack>    
        </Provider>
    );
};

export default Layout;