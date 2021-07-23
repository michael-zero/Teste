import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DadoUsuario from './DadoUsuario'
import Screen from './Screen'
import colors from '../config/colors'
import Header from './Header'
import {Button} from 'react-native-paper'
import AppTextInput from './AppTextInput'


const Atualiza = ({titulo, novoCampo, dadoAntigo, tipo, setAtualiza, tipoCampo, ...outrasProps}) => {
  
    return (
        <Screen>
            <Header titulo={titulo}/>

            <View style={{marginVertical: 10}}>
                <DadoUsuario chave='Atual'/>

                <AppTextInput containerStyle={styles.container}
                value={dadoAntigo}
                editable={false}
                placeholderTextColor={colors.cinzinha}
                inputStyle={styles.inputStyle}/>


            </View>

            <View style={{marginVertical: 10}}>
            <DadoUsuario chave='Novo'/>

          
            <AppTextInput containerStyle={styles.container}
            tipoCampo={tipoCampo}
            dado={dadoAntigo}
            placeholder={tipo ? 'Insira um novo': 'Insira um(a) novo(a)'}
            onChangeText={t => setAtualiza(t)}
            placeholderTextColor={colors.cinzinha}
            inputStyle={styles.inputStyle}/>
        


            </View>

            <View style={{marginTop: 20}}>
                <Button {...outrasProps} disabled={!novoCampo && true} mode='outlined' color='blue'>Atualizar</Button>
            </View>

            
        </Screen>
    )
}

export default Atualiza

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cinzinha,
        borderRadius: 0,
        margin: 0, 
        height: 40,
        marginTop: 5
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 0,
        padding: 0,
        margin: 0
    }
})
