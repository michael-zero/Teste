import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import fonts from '../config/fonts';

const DadoUsuario = ({chave, valor, nomeIcone, chaveStyle, tamIcone, temImagem, select, icone, containerDadoUsu, containerPaiDado ,...outrasProps}) => {
    return (
      <View style={[styles.containerDadosUsuario, {...containerPaiDado}]}>
      <View style={[styles.dadoUsuario, {...containerDadoUsu}]}>
        {chave && <Text style={[styles.dadoUsuarioTxt, {...chaveStyle}]}>{chave}</Text>}
        {valor && <Text style={[styles.dadoUsuarioTxt, {fontFamily: fonts.Montserrat_500Medium}]}>{valor}</Text>}
        {icone &&  
          <View style={{flexDirection: 'row'}}>
          { select && <Text>{select}</Text>}
          <TouchableOpacity {...outrasProps} style={{alignItems:'center', justifyContent: 'center',width: 50}}>
            { temImagem ? <AntDesign name="check" size={22} color="green" /> : <MaterialCommunityIcons  name={nomeIcone} size={tamIcone ? tamIcone: 22} color="black" />}
          </TouchableOpacity>
          </View>
        }
      </View>
    </View>
    )
  }

export default DadoUsuario

const styles = StyleSheet.create({
    containerDadosUsuario:{
        padding: 5
      },
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
        fontSize: 16,
        fontFamily: fonts.texto
      },
})
