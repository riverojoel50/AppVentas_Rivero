import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import CurrentModal from './components/Modal'
import List from './components/List'

export default function App( ) {
    
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerChangeItem = (text) => setTextItem(text)
  const onHandlerAddItem = () => {
    setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem}])
    // setItemList({...itemList, id: Math.random()*10, value: textItem }) => hace lo mismo que la de arriba
    setTextItem('')
  } 

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }


  return (
    <View style={styles.screen}>
      <CurrentModal onHandlerDelete = {onHandlerDeleteItem} visible = {modalVisible} itemSelected ={itemSelected}/>
      
      <View style={styles.container}>
        <TextInput placeholder='Ingrese items' style={styles.input} value={textItem} onChangeText={onHandlerChangeItem} />
        <Button title='Add' style = {styles.buttona} onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false }/>
      </View>
  
      <List itemList = {itemList} onHandlerModal = {onHandlerModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: '10%',
    padding: 30,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttona:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
})