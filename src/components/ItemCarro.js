import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TextInput} from 'react-native-paper'



const ItemCarro = ({nome, children, ...outrasProps}) => {
    return (
        <View style={styles.container}>
             {children}
             <TextInput {...outrasProps}  placeholder={nome} style={styles.input}/>
        </View>
    )
}

export default ItemCarro

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        height: 40,
        marginHorizontal: 5,
        width: '90%',
        marginLeft: 10
    }
})
