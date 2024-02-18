import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY = "V-d5FfuFfF4rIs46lcXJkzOVoZwV5fBfWxwxOTDp12Hkjx4xlrfZiba4n6nQuG1tIBzzCITp1IhvWns3_9nTjVLcOe-LZf2vR1Fj3wEgNmslGh9IodDMxvTzkv_9ZHYx";



export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");



    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;




        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(
                        json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );




    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city,activeTab]);


    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>

            <View style={styles.container}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity} />


            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />

            </ScrollView>
            

            <Divider width={1}/>

            <BottomTabs/>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        padding: 15

    }
});
