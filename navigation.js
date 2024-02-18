import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import RestaurantDetails from './screens/RestaurantDetails';

export default function RoorNavigation() {

    const Stack = createStackNavigator();

    const screenOptions = {
        hearderShown : false
    }

    return (
        <NavigationContainer>
            <Stack.Naviagtor screenOptions={screenOptions}>

                <Stack.Screen name="Home" component ={Home}/>
                <Stack.Screen name="RestaurantDetail" component ={RestaurantDetail}/>


            </Stack.Naviagtor>

        </NavigationContainer>
    )
}