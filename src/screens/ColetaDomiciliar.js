import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DadoUsuario from '../components/DadoUsuario'
import Screen from '../components/Screen'
import Constants from 'expo-constants'
import colors from '../config/colors'

import Bairros from '../components/Bairros'
import {DadosContext} from '../DadosContext'
import fonts from '../config/fonts'
const ColetaDomiciliar = () => {

   
    const {bairro} = React.useContext(DadosContext)
    const [modal, setModalVisible] = React.useState(false)
    const [checked, setChecked] = React.useState(null);

    return (
       <Screen style={styles.screen}>
           
           <DadoUsuario chave='Selecione o bairro' icone={true} nomeIcone="arrow-down-drop-circle-outline"
           containerPaiDado={{padding: 0}}
           containerDadoUsu={{marginHorizontal: 0, paddingLeft: 5 ,backgroundColor: 'white', height: 40, alignItems: 'center'}} 
           onPress={() => setModalVisible(true)}
           />

           <Bairros modal={modal} setModalVisible={setModalVisible} checked={checked} setChecked={setChecked}/>

           <Header titulo='Bairro' containerStyle={{alignItems: 'flex-start', marginTop: 10, backgroundColor: colors.fundo}}
           texto={{marginLeft: 5, fontFamily: fonts.titulo}}/>

           { bairro && <Header titulo={bairro.bairro} containerStyle={{backgroundColor: 'white', alignItems: 'flex-start', backgroundColor: 'white'}}
           texto={{marginLeft: 5, fontFamily: fonts.titulo}}/>}

           <Header titulo='Descrição' containerStyle={{alignItems: 'flex-start', marginTop: 10, backgroundColor: colors.fundo}}
           texto={{marginLeft: 5, fontFamily: fonts.titulo}}/>
           
          { bairro && <View style={{height: 265, width: '100%'}}>
                        <Text style={{fontSize: 16, padding: 5, fontFamily: fonts.Montserrat_500Medium}}>
                            {bairro.descricao}
                        </Text>
                    </View>}

           { bairro && <View style={{flexDirection: 'row', height: 100, width: '100%'}}>
                <View style={{width: '50%', backgroundColor: 'white', borderRightWidth: 1, borderColor: colors.fundo, paddingTop: 5}}>
                    <Text style={{marginLeft: 5, fontFamily: fonts.titulo}}>Horário</Text>
                    <View style={{flexDirection: 'row'}}>
                        
                        <Text style={{marginLeft: 5, fontFamily: fonts.Montserrat_500Medium}}>{bairro.inicio}</Text>
                        <Text style={{marginLeft: 5, fontFamily: fonts.Montserrat_500Medium}}>{bairro.termino}</Text>
                    </View>
                </View>

                <View style={{width: '50%', backgroundColor: 'white',paddingTop: 5}}>
                    <View>
                        <Text style={{marginLeft: 5, fontFamily: fonts.titulo}}>Dias</Text>
                        <Text style={{marginLeft: 5, fontFamily: fonts.Montserrat_500Medium}}>{bairro.dias}</Text>
                    </View>
                </View>
            </View>}

      </Screen>
    )
}

const Header = ({titulo, containerStyle, texto}) => {
    return (
      <View style={[styles.containerTitulo, {...containerStyle}]}>
      <Text style={[styles.containerTituloTxt, {...texto}]}>{titulo}</Text>
     </View> 
    )
  }

export default ColetaDomiciliar

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.fundo
    },
    containerTitulo:{
        backgroundColor: '#CCD1D1',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
      },
      containerTituloTxt:{
        fontSize: 16,
        marginLeft: 20,
       
      }
})
