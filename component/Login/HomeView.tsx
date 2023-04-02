import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';


const HomeView = ({ route , navigation }) => {
    const { myName } = route.params;

    return (
        <View style= {styles.mainContainer} >
            <Text style ={styles.mainPart}> Welcome {myName} </Text>
            <Button title='Go Back' 
            onPress={()=> navigation.goBack()}/>
        </View>
    )
}

export default HomeView;

const styles = StyleSheet.create({

    mainContainer: {
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    mainPart: {
        fontSize: 35,
        color: "#4c5dab",
        marginTop: 0,
        
    }

})
