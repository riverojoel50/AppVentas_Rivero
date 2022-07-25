import { StyleSheet, View, TextInput, Button } from 'react-native';
import { React, useState } from 'react'
import CurrentModal from './components/Modal'
import List from './components/List'
import Header from './components/Header';
import StartGameScreen from './pages/StartGameScreen';
import GameScreen from './pages/GameScreen';

//imports para fonts
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'

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

  const [loaded] = useFonts({
    BitterBlack: require('./assets/fonts/Bitter-Black.ttf'),
    BitterItalic:require('./assets/fonts/Bitter-Italic.ttf')
  })
  const [userNumber, setUserNumber] = useState()

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame} />

  if (userNumber)
    content = <GameScreen userOption={userNumber}/>

  return (
    <View style={styles.screen}>
      <Header title= 'Game 1'></Header>
      {/* <StartGameScreen /> */}

      {content}

      {/* <CurrentModal onHandlerDelete = {onHandlerDeleteItem} visible = {modalVisible} itemSelected ={itemSelected}/>
      
      <View style={styles.container}>
        <TextInput placeholder='Ingrese items' style={styles.input} value={textItem} onChangeText={onHandlerChangeItem} />
        <Button title='Add' style = {styles.buttona} onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false }/>
      </View>
  
      <List itemList = {itemList} onHandlerModal = {onHandlerModal}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
    //marginTop: '10%',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttona:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
})