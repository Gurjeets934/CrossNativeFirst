import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";

import Flexbox from './Flexbox';
import AboutUs from "./AboutUs";

const Stack = createNativeStackNavigator();



const WelcomePageMain = ({navigation})=> {
    const {wrapper, textStyle, clickMeStyles} = styles
return (

    <View style = {wrapper}>
    <Text style = {textStyle}
    >Welcome to Cross Native First Page!</Text>
    
    <Image 
    source = {
        require('./../../assets/welcome.jpeg')
    } style= {styles.imageStyle}/>
    <Text style = {clickMeStyles} 
    //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('Flexbox');
   
    }}
    >Click Here! to see our Gallery</Text>
    <Text style = {clickMeStyles} 
   //Function to Navigate and Redirect to another Page!
    onPress= {()=>{
        navigation.push('AboutUs');
    }}
    >Our Team! About US</Text>

    </View>
)
}  



const styles = StyleSheet.create(
    {
        wrapper:{
            backgroundColor: "#f1f1f1",
            padding: 10,
            alignItems: 'center'
        },
        textStyle:{
            color: "#3949AB",
            textAlign: 'center',
            marginBottom:50,
            marginTop: 30,
        },
        clickMeStyles:{
            margin: 10,
            padding: 10,
            backgroundColor: "blue",
            color: "white",
        },
       imageStyle:{
        width:300,
        height:300,
        marginBottom:30
       }
    }
)

const WelcomePage =() =>{
    return (
        <Stack.Navigator initialRouteName="CrossNativeFirst">
            <Stack.Screen name="CrossNativeFirst" component = {WelcomePageMain} options={{
                
            }}></Stack.Screen>
       
            <Stack.Screen name="Flexbox" component={Flexbox} options={{
            title:"Gallery", headerShown:false
            }}></Stack.Screen>

            <Stack.Screen name="AboutUs" component={AboutUs} options={{
            title:"AboutUs", headerShown:false
            }}></Stack.Screen>

        </Stack.Navigator>
    )
    
}

export default WelcomePage;
