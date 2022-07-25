import { StyleSheet, Text, View } from "react-native"
import Color from "../constants/colors"

export default Header = (props) => {
    const { title } = props 
    
    return (
        <View style={style.header}>
            <Text style={style.headerTitle}>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent:'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 22
    }
});