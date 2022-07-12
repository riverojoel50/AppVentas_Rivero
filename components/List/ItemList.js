import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default ItemList = (props) => {
    const {value, id, onHandlerModal} = props;

    return (
        <TouchableOpacity onPress={() => onHandlerModal(id)} style={styles.item}>
                <Text>Item: {value}</Text>
       </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      marginTop: '10%',
      height: 50,
    },
  })