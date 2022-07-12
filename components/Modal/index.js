import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default currentModal = (props) => {
    const{onHandlerDelete, visible, itemSelected} = props

    return(
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.modal}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <Text>Advertencia!</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text>Está por borrar un dato</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>{itemSelected.value}</Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button onPress={() => onHandlerDelete(itemSelected.id)} title='Confirmar'/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },  
    modalView: {
      backgroundColor: 'white',
      width: '80%',
      height: '50%',
      borderRadius: 10,
      padding: '10%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
    },
    modalTitle: {
      backgroundColor: '#ccc',
      color: 'white',
      fontSize: 18,
    },
    modalMessage: {
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalButton: {
      marginTop: 15,
    },
    modalItem: {
      fontSize: 30
    }
  })