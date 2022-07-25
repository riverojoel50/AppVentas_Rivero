import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard } from "react-native"
import Colors from "../constants/colors"
import Card from "../components/Card"
import Input from "../components/Input"
import { useState } from "react"
import NumberContainer from "../components/NumberContainer"

export default StartGameScreen =  (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handlerInputNumber =  (text) => {
        setEnteredValue(text.replace(/[^0-9]/g,'')) //setEnteredValue(text.replace(/[^0-9]/g),'')
    }

    const handlerResetInput = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const handlerConfirmInput = () => {
        const choseNumber = parseInt(enteredValue)
        if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99)
            return
        
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
    }

    const confirmedOuput = confirmed ? <Text>Número Elegido: {selectedNumber}</Text>: null


    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={style.screen}>
                <Text style={style.title}>Comenzar juego</Text>
                <Card style={style.inputContainer}>
                    <Text>Ingrese un numero</Text>
                    <Input style={style.input}
                        blurOnSubmit
                        autoCapitilizacion="none" //quitarCapitilzacion
                        autoCorrect={false} //quitarAutocoreccion
                        keyboardType="numeric" //aparece el teclado numerico
                        maxLength={2} //cantidadMaximaDeCaracteres
                        onChangeText ={handlerInputNumber}
                        value={enteredValue}
                    />
                    <View style={style.buttonContainer}>
                        <View style= {style.button}>
                            <Button title="Limpiar" onPress={handlerResetInput} color= {Colors.accent}/>
                        </View>
                        <View style= {style.button}>
                            <Button title="Confirmar" onPress={() => handlerConfirmInput()} 
                                color= {Colors.primary}
                                disabled = {enteredValue.length < 2 ? true: false}
                            />
                        </View>
                    </View>
                </Card>
                {confirmed && (
                    <Card style={style.summaryContainer}>
                        <Text>Tu seleccion</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button title='Empezar Juego' onPress={() => props.onStartGame(selectedNumber)}/>
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'BitterBlack'
      },
    input:{
        width: '20%',
        textAlign: 'center',
        fontSize:20
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        padding: 20,
        alignItems:"center",
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button:{
        width: 100
    },
    buttonContainer:{
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }, 
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
        height: '30%'
    } 
})