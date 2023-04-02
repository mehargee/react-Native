import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';


const FlatListWork = () => {
    const users = [
        {
            key: "1",
            name: "Ali"
        },
        {
            key: "2",
            name: "Usman"
        },
        {
            key: "3",
            name: "Asad"
        },
        {
            key: "4",
            name: "Subhan"
        },
        {
            key: "5",
            name: "Nazir"
        },
        {
            key: "6",
            name: "Saad"
        },
    ];
    return (
        <View>
            {/* {users.map((ele) => {
                return (
                    <View key={ele.key}>
                        <Text style={styles.textSize2}>
                            {ele.name}
                        </Text>
                    </View> )})} */}
            <FlatList
                style={styles.listStyle}
                data={users}
              horizontal
               // numColumns={2}
               showsHorizontalScrollIndicator={false}
                // inverted
                renderItem={(ele) => {
                    return (
                        <Text style={styles.textStyle}>
                            {ele.item.name}
                        </Text>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        fontSize: 30,
        backgroundColor: "blue",
        padding: 20,
        margin: 30,
        fontWeight: "bold",
    },
    listStyle: {
        fontSize: 30,
        margin: 20,
        padding: 10
    }
})
export default FlatListWork;