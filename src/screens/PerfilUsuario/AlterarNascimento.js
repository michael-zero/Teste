import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Atualiza from '../../components/Atualiza'
import Screen from '../../components/Screen'
import Header from '../../components/Header'
import DadoUsuario from '../../components/DadoUsuario'
import {TextInput} from 'react-native-paper'
import colors from '../../config/colors'
import { TextInputMask } from 'react-native-masked-text'
import InputComMascara from '../../components/InputComMascara'
import { Button } from 'react-native-paper'

const AlterarNascimento = ({route}) => {


    const {dado} = route.params
    const refInput = React.useRef()
    const [dadoCampo, setDado] = React.useState(dado)


    return (
       <Screen>
           <Header titulo='Atualizar Nascimento'/>
     
           <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View style={[styles.container, {marginTop: 20}]}>
                    <InputComMascara dadoAntigo={dado} chave='Novo' valor={dadoCampo}  setDado={setDado} refInput={refInput}/>
                </View>

                <View>
                    <Button mode='outlined'>Atualizar</Button>
                </View>
            </View>
            
       </Screen>
    )
}

export default AlterarNascimento

const styles = StyleSheet.create({
    container: {

    },
    containerInput: {
        height: 40,
        backgroundColor: colors.cinzinha,
        marginTop: 5
    },
    input: {
        height: 40,
        marginHorizontal: 20,
        marginTop: 5
    }
})
