import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

const ImgWork = (props: any) => {
    return (
        <View>
            <Text style={styles.textSize2}>
                {props.imgNo}
            </Text>
            <Image source={props.imgSrc}
                style={styles.imgStyle} />
        </View>
    );
}

const styles = StyleSheet.create({

    textSize2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
    },
    imgStyle: {
        height: 300,
        width: 300,
    }
})

export default ImgWork;

