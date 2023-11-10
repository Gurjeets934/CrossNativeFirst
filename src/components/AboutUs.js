import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,Alert } from 'react-native';

const Stack = createNativeStackNavigator();

const AboutUsMain = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/Humanity.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our creative space where innovation meets passion. We are a
        team of dedicated individuals committed to delivering excellence in
        every project.
      </Text>
      <TouchableOpacity style={styles.contactButton} onPress={() => 
        Alert.alert('Contact Email Address','someexample@email.com')}>
        <Text style={styles.contactButtonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});







const AboutUs =() =>{
    return (
        <Stack.Navigator initialRouteName="Aboutus">
            <Stack.Screen name="AbouUs" component = {AboutUsMain}></Stack.Screen>
          
        </Stack.Navigator>
    )
    
}

export default AboutUs;
