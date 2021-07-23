import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import fonts from '../config/fonts'
import { AntDesign } from '@expo/vector-icons'

const InputEditavel = ({chave, value, ...outrasProps}) => {
    const refInput = React.useRef(null)
    const [editavel, setEditavel] = React.useState(false)
    return (
        <View style={[styles.dadoUsuario, {marginLeft: 25, marginTop: 10}]}>

        <Text style={[styles.dadoUsuarioTxt]}>{chave}</Text>
        <TextInput
        ref={refInput}
        editable={editavel}
        selectionColor='blue'
        value={value}
        {...outrasProps}
        style={{flex:1, marginHorizontal: 10, textAlign: 'center'}}
          />
        
        <TouchableOpacity onPress={() => {
            setEditavel(true)
            refInput.current.focus()}
            }>
          <AntDesign name="edit" size={20} color="black" />
        </TouchableOpacity>
  </View>
    )
}

export default InputEditavel

const styles = StyleSheet.create({
    dadoUsuario: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1, 
        borderBottomColor: '#CCD1D1',
        marginHorizontal: 20,
        height: 30,
        marginTop: 5,
        paddingBottom: 3
      },
      dadoUsuarioTxt:{
        fontSize: 15,
        fontFamily: fonts.texto
      },
})
