import React, { useEffect, useState } from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import Card from "../components/Card"
import NumberContainer from "../components/NumberContainer"

export default GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState()
    
    const generateRandomBetween = (min,max,exclude) => {
        min = Math.ceil(min)
        max = Math.floor(max)

        const rndNum = Math.floor(Math.random() * (max-min) + min)

        if (rndNum === exclude){
            return generateRandomBetween(min,max,exclude)
        }
        else {
            //return rndNum

            return setCurrentGuess(rndNum)
        }
    }

    //useEffect que se ejecuta cada vez que se modifica la propiedad recibida
    useEffect(() => {
        generateRandomBetween(1,100,props.userOption)

    },[props.userOption])


    return (
        <View style={styles.screen}>
            <Text>La suposición del openent</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='MENOR' onPress={() =>{}}/>
                <Button title='MAYOR' onPress={() =>{}}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})