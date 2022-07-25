import React from "react"
import { StyleSheet, View} from "react-native"

export default Card = (props) => {
    return(
        <View style={{...style.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
      card:{
        //Estilo Sombreado
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
      }
})

/*
Se crea componente card debido a este componen contiene los estilos 
de sombreado y existe la posibilida de utilizarse en varios casos.

*/