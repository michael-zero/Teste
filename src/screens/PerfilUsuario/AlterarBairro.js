import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Atualiza from '../../components/Atualiza'
import Screen from '../../components/Screen'
import Header from '../../components/Header'
import InputComMascara from '../../components/InputComMascara'
import {Button} from 'react-native-paper'

const AlterarBairro = ({route}) => {
    const {dado} = route.params
    const refInput = React.useRef()
    const [dadoCampo, setDado] = React.useState(dado)

    return (
      <Screen>
           <Header titulo='Atualizar Bairro'/>

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

export default AlterarBairro

const styles = StyleSheet.create({})
