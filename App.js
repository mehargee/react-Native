import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Calculator from './component/Calculator/Calculator';
import Calculator2 from './component/Calculator/Calculator2';
import CounterApp from './component/CounterApp/CounterApp';
import FlatListWork from './component/FlatList/FlatListWork';
import Home from './component/Home/Home';
import ImgWork from './component/ImgWork/ImgWork';
import LoginForm from './component/Login/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './component/Login/HomeView';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name='Login' component={LoginForm} />
    <Stack.Screen name='Home' component={HomeView} />

  </Stack.Navigator>
</NavigationContainer>



    // <View>
    //   {/* <Home /> */}
    //   {/* <FlatListWork /> */}
    //   {/* <Calculator2 /> */}
    //   {/* <CounterApp /> */}
    //   <LoginForm />
    //   {/* props working  */}
    //    {/* <ImgWork imgSrc={require('./assets/car.jpg')} imgNO={"This is First Image"} />
    //   <ImgWork imgSrc={require('./assets/car.jpg')} imgNO={"This is Second Image"} />
    //   <ImgWork imgSrc={require('./assets/car.jpg')} imgNO={"This is Third Image"} /> */}

      
    // </View>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'left',
//   },
// });
