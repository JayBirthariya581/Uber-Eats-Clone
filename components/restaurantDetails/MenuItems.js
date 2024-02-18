import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const foods = [
    {
        title: "Samosa",
        descrition: "garma-garam samosa with red chatni",
        price: "13.50",
        image: "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg"
    },
    {
        title: "Aalo Bonde",
        descrition: "garma-garam samosa with red chatni",
        price: "13.50",
        image: "https://static.toiimg.com/thumb/55051496.cms?imgsize=192868&width=800&height=800"
    },
    {
        title: "Dosa",
        descrition: "garma-garam samosa with red chatni",
        price: "13.50",
        image: "https://www.daringgourmet.com/wp-content/uploads/2023/06/Dosa-Recipe-3.jpg  "
    },
    {
        title: "Rajma Chawal",
        descrition: "garma-garam samosa with red chatni",
        price: "13.50",
        image: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg"
    }

]



export default function MenuItems() {
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            {
                foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItemStyle}>
                            <FoodInfo food={food} />
                            <FoodImage food={food} />
                        </View>
                        <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}} />
                    </View>
                ))
            }
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",

    }
})


const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.descrition}</Text>
        <Text>{props.food.price}</Text>


    </View>
)


const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
)