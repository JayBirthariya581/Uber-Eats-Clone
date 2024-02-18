import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
  name:"Farmhouse Kitchen Thai Cusisine",
  image:"https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg",
  price:'$$',
  reviews:'1600',
  rating:5,
  categories: [{title:'Thai'},
              {title:'Comfort Food'},
            {title:"Ice Creams"}]
};

const {name,image,price,reviews,rating,categories} = yelpRestaurantInfo;
const formattedCategories = categories.map((cat)=>cat.title).join(' • ');

const description =  `${formattedCategories} ${price ? ' • '+ price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantName name={name}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}


const RestaurantImage = (props) => (
    <Image source={{uri:props.image}} style={{width:"100%", height:180}}/>
)

const RestaurantName = (props) => (
    <Text style={{fontSize:29,fontWeight:'600',marginTop:10,marginHorizontal: 15}}>{props.title}</Text>
)

const RestaurantDescription = (props) =>(
    <Text style={{marginTop:10,marginHorizontal:15,fontWeight:'400',fontSize:15.5}}>{props.description}</Text>
)