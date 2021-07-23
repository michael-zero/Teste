import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DadoUsuario from './DadoUsuario'
import { TextInput } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'
import colors from '../config/colors'
import fonts from '../config/fonts'

const InputComMascara = ({chave,dadoAntigo, valor, tipo, setDado, refInput}) => {
    return (
        <>

            <View style={styles.container}>
                <DadoUsuario chave='Atual'/>
                
                <View style={styles.containerInput}>
                    <TextInput
                        disabled
                        style={styles.input}
                        value={dadoAntigo}
                    />
                </View>
            </View>




        <DadoUsuario chave={chave}/>
         
         <View style={styles.containerInput}>
            { tipo ? <TextInput
             
                 mode='flat'
                 selectionColor='blue'
                 outlineColor='white'
                 style={styles.input}

                 render= { props => <TextInputMask onChangeText={d => setDado(d)}
                 value={valor}
                 {...props}
                 ref={refInput}
                 type={tipo}
                 /> } 
             /> : 
             (
                <TextInput
             
                mode='flat'
                selectionColor='blue'
                outlineColor='white'
                style={styles.input}
                onChangeText={d => setDado(d)}
                />
             )}
         </View>
     </>
    )
}

export default InputComMascara

const styles = StyleSheet.create({
    containerInput: {
        height: 40,
        backgroundColor: colors.cinzinha,
        marginTop: 5
    },
    input: {
        height: 40,
        marginHorizontal: 20,
        marginTop: 5,
        fontFamily: fonts.texto
    }
})
