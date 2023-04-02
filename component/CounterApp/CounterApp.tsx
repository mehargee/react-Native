import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';


const CounterApp = () => {

    const [value, setValue] = useState(0)

    return (
        <View>
            <TouchableOpacity
            style={styles.design}
                onPress={() => setValue(value + 1)}>
                <Text >+</Text>
            </TouchableOpacity>
            {value}
            <TouchableOpacity onPress={() => 
            value > 0 ?  setValue(value - 1) : value } 
            style={styles.design}>
                <Text>-</Text>  
            </TouchableOpacity>
            <br />
            <TouchableOpacity
            style={styles.design}
                onPress={() => setValue(0)}>
                <Text >reset</Text> 
            </TouchableOpacity>

        </View>
    )
}

export default CounterApp;

const styles = StyleSheet.create({
  
    design: {
        borderColor: "black",
        alignItems: 'center',
        backgroundColor: 'lightgray',
        padding: 20,

    },

})