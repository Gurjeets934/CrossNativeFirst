import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";


const PageHeader = ()=> {
return (
    <SafeAreaView style = {styles.wrapper}>
    <Text style = {styles.textStyle}>Header Displayed here</Text>
    </SafeAreaView>
)
}  

const styles = StyleSheet.create(
    {
        wrapper:{
            backgroundColor: "#138fef",
            padding: 10,
            paddingTop: Platform.OS == 'android' ? 30: 20,
        },
        textStyle:{
            color: "#000",
            textAlign: 'center'
        }
    }
)
export default PageHeader;
