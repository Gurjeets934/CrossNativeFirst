
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React  from "react";
import { View , Image, Text, StyleSheet,TouchableOpacity, SafeAreaView, Button} from "react-native";



const Stack = createNativeStackNavigator();

const FlexboxMain = () => {
    return(
        <View style = {styles.wrapper}>
         
         <View style = {styles.box1}>

         <Image 
        source = {require('./../../assets/butterfly.jpg')}
    style= {styles.imageStyle}/>
            
            </View>
         <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/meditation.jpg')}
    style= {styles.imageStyle}/>
         </View>
         <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/mountains.jpg')}
    style= {styles.imageStyle}/>
         </View>
         <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/pathway.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/peace.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/birds.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/Beautiful_Town.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/City_Town.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/Cute_Fox.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/Humanity.jpg')}
    style= {styles.imageStyle}/>
</View>
<View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/landscape.jpg')}
    style= {styles.imageStyle}/>
</View>
    <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/Rhino.jpg')}
    style= {styles.imageStyle}/>
    </View>
    <View style = {styles.box1}>
         <Image 
        source = {require('./../../assets/Waterfall.jpg')}
    style= {styles.imageStyle}/>
     </View>

    </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        color: "#3949AB",
        textAlign: 'center',
        marginBottom:50,
        marginTop: 30,
    },
    wrapper:{
        flex:1,
        padding:5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'flex-start',
        backgroundColor: 'white',
        flexWrap:'wrap'
    },
    box1:{
        backgroundColor: 'red',
       
        width:100,
        height:100,
        marginRight:2,
        marginTop:50,

    },
    imageStyle:{
        
        width:100,
        height:100
    },
    box3: 
    {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        flex:1
    }
})

const Flexbox =() =>{
    return (
           
            <Stack.Navigator initialRouteName="Gallery" screenOptions={{
                title:"Gallery"
            }} >
            <Stack.Screen name="Flexbox Main" component={FlexboxMain}></Stack.Screen>
        
        </Stack.Navigator>
    )    
}

export default Flexbox;