import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const localRestaurants = [
    {
        name: "Viraswami",
        image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["cafe", "Bar"],
        price: "$$",
        review_count: 1244,
        rating: 4.5
    },

    {
        name: "Haldiram Hotspot",
        image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["cafe", "Bar"],
        price: "$$",
        review_count: 1244,
        rating: 4.5
    },

    {
        name: "Uttar Dakshin",
        image_url: "https://liveonindia.com/wp-content/uploads/2020/11/restaurants-in-chennai.jpg",
        categories: ["cafe", "Bar"],
        price: "$$",
        review_count: 1244,
        rating: 4.5
    },


]


export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.restaurantData.map((restaurant, index) => (
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}

        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (

    <>
        <Image
            style={{ width: "100%", height: 180 }}
            source={{ uri: props.image }} />

        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color='#fff' />

        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-45 • Min</Text>
        </View>


        <View style={{
            backgroundColor: "#eee", height: 30, width: 30, justifyContent: 'center', alignItems: 'center',
            borderRadius: 15
        }}>
            <Text >{props.rating}</Text>
        </View>
    </View>

)
