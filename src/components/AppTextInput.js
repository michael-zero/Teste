import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { TextInputMask } from 'react-native-masked-text'
import { TextInput as TextInputPaper } from 'react-native-paper'

const AppTextInput = ({width='100%', containerStyle, inputStyle, nomeIcone, tipoCampo, dado, ...outrasProps}) => {
  
    const refInput = React.useRef()
    const [dadoCampo, setDadoCampo] = React.useState(dado)

    return (
        //criou um container personalizado para o INPUT
        <View style={[styles.container, {width}, containerStyle]}> 
           {/* Se existir icone ok,  */}
           {nomeIcone && <MaterialCommunityIcons 
           style={styles.icon}
           name={nomeIcone} size={25} color='black'/>
           }

           <TextInput
           style={[styles.input, {backgroundColor: '#C4C4C4'},  inputStyle]}
           placeholderTextColor='black'
           {...outrasProps}/>
 

        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        flexDirection: 'row',
        padding: 10,
        
    },
     icon: {
         marginRight: 10,
     },
     input: {
         flex: 1,
         height: 40,
        //  borderWidth: 1,
         borderRadius: 15,
         fontWeight: 'bold',
         paddingHorizontal: 10,
        
     }
})