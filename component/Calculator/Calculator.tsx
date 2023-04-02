import { StyleSheet, Text, View, Image, Button , TouchableOpacity, Alert} from 'react-native';



const Calculator =() => {


  return (
    <View style={styles.container}>
        <Text>Calculator</Text>

        <View style={styles.mainDivGrid}>
            <Text>value</Text>
        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.textStyle}
        onPress={()=> Alert.alert('Touch')}>
            <Text>0</Text>
        </TouchableOpacity>


        </View>
    </View>


  );
}
export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle:{
    backgroundColor:"yellow",
    color: "red",
    width:30,
    height:30,
    textAlign:"center",
    padding:5,
    margin:10,
  },
  mainDivGrid:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  }
});
