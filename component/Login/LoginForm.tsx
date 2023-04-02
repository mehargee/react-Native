import {
    StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';


const LoginForm = ({navigation}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);

    const submit = () => {
        if (userName === "Muhammad" && password === "Asad") {
            Alert.alert(`Thanks You ${userName}`);
            console.log("login sucessfully");
            navigation.navigate("Home" , { myName : `${userName}` });

        }
        else {
            Alert.alert("User Name and Password is Incorrect");
            console.log("login Incorrect");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contact}>
                <Text style={styles.contactUS}> CONTACT US </Text>
            </View>
            <View style={styles.loginHead}>
                <Text style={styles.loginForm}>Login Form</Text>
                <Text style={styles.loginPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.</Text>
            </View>
            <View style={styles.InputData}>
                <Text>Enter Your Name</Text>
                <TextInput
                    style={styles.InputField}
                    placeholder='Name'
                    value={userName}
                    onChangeText={(typing) => setUserName(typing)}
                />
            </View>
            <View style={styles.InputData}>
                <Text>Enter Password</Text>
                <TextInput
                    style={styles.InputField}
                    secureTextEntry
                    placeholder='Password'
                    value={password}
                    onChangeText={(typing) => setPassword(typing)}
                />
            </View>

            <View style={styles.wrapper}>
                <Checkbox
                    style={styles.checkbox}
                    value={agree}
                    onValueChange={() => { setAgree(!agree) }}
                    color={agree ? "purple" : undefined}
                />
                <Text style={styles.wrapperText}>I have read and Agree this.</Text>
            </View>

            <TouchableOpacity style={[styles.btnSyle,
            { backgroundColor: agree ? "purple" : "gray" },
            ]}
                disabled={!agree}
                onPress={() => submit()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
    },
    contact: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    contactUS: {
        fontSize: 22,
    },
    loginHead: {
        marginTop: 15,
    },
    loginForm: {
        fontSize: 20,
        fontWeight: "bold",
    },
    loginPara: {
        textAlign: "justify",
        width: "80",
    },
    InputData: {
        marginVertical: 15
    },
    InputField: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: "90%",
        borderRadius: 5,
    },
    checkbox: {

    },
    wrapper: {
        position: "relative",
        marginVertical: 20,
    },
    wrapperText: {
        position: "absolute",
        top: 0,
        left: 20,
    },
    btnSyle: {
        textAlign: "center",
        width: "90%",
        paddingVertical: 10,
        borderRadius: 5,
    },

})

export default LoginForm;