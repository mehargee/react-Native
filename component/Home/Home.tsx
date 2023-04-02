import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

const myName = "Muhammad Asad"

const Home = () => {
    return ( 
        <View>
            <Text style={styles.textColor}>
                My name is Asad
            </Text>

            <Text style={styles.textSize2}>
                I love react Native
            </Text>
            

            <Text >
                My name is {myName}
            </Text>

            <Image source={require('../../assets/car.jpg')}
                style={styles.imgStyle} />

                <Button 
                    title='Click me I am Button'
                    onPress={()=>{Alert.alert('Thanks for click')}}/>

        </View>
     );
}
 
const styles =StyleSheet.create({
    textColor: {
        color : "blue",
        fontSize: 40,
        fontWeight: "bold",
    },
    textSize2: {
        fontSize : 30,
    },
    imgStyle:{
        height:300,
        width:300,
    }
})
export default Home;