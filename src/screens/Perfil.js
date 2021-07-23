import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Header from '../components/Header'
import Screen from '../components/Screen'
import DadoUsuario from '../components/DadoUsuario'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import fonts from '../config/fonts'
import { Switch } from 'react-native-paper';
import InputEditavel from '../components/InputEditavel'

const Perfil = ({navigation}) => {
   
  

    const [u, setU] = React.useState({
        nome: 'John Doe',
        cpf: '078.345.678-17',
        email: 'dodo@gmail.com',
        rg: '456.789.123',
        endereco: 'Prox ao Albertão, nº 9090',
        bairro: 'Renascença',
        nascimento: '07/10/1990',
        telefone: '(99) 98876-5600'
    })

    

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => {
      setIsSwitchOn(!isSwitchOn)
    }

    const Campo = ({chave, valor, icone, nomeIcone, tamIcone, temImagem, ...outrasProps}) => {
        return   <View style={[styles.containerDadosUsuario]}>
        <View style={[styles.dadoUsuario]}>
          {chave && <Text style={[styles.dadoUsuarioTxt]}>{chave}</Text>}
          {valor && <Text style={[styles.dadoUsuarioTxt, {flex: 1, fontWeight: 'normal', fontSize: 14, fontFamily: fonts.Montserrat_500Medium, textAlign: 'center'}]}>{valor}</Text>}
          {icone &&  
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity {...outrasProps} style={{alignItems:'center', justifyContent: 'center',width: 50}}>
              { temImagem ? <AntDesign name={nomeIcone} size={18} color="black" /> : <MaterialCommunityIcons  name={nomeIcone} size={tamIcone ? tamIcone: 22} color="black" />}
            </TouchableOpacity>
            </View>
          }
        </View>
      </View>
    }




    return (
        <Screen>
            <Header titulo='Meus Dados'/>
            <DadoUsuario chave='Usuário' chaveStyle={{fontFamily: fonts.Montserrat_500Medium}} containerPaiDado={{marginTop: 10}}/>


            <View>
                <Campo chave='CPF' valor={u.cpf}/>
                <Campo chave='Email' valor={u.email}/>
                <InputEditavel chave='Nome' value={u.nome} onChangeText={text => setU({...u, nome: text})}/>
                <InputEditavel chave='RG' value={u.rg} onChangeText={text => setU({...u, rg: text})}/>
                <InputEditavel chave='Endereço' value={u.endereco} onChangeText={text => setU({...u, endereco: text})}/>
                <InputEditavel chave='Bairro' value={u.bairro} onChangeText={text => setU({...u, bairro: text})}/>
                <InputEditavel chave='Nascimento' value={u.nascimento} onChangeText={text => setU({...u, nascimento: text})}/>
                <InputEditavel chave='Telefone' value={u.telefone} onChangeText={text => setU({...u, telefone: text})}/>

              
            </View>

            {/* NOTIFICACAO */}
            <View style={styles.containerNotify}>
              
              <View style={{width: '80%'}}>
               <Text style={styles.texto}>Deseja ser notificado das infrações cometidas nos veículos cadastrados?</Text>
              </View>
              
              <Switch color='blue' value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>

        </Screen>
    )
}

export default Perfil

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
        fontSize: 15,
        fontFamily: fonts.texto
      },
      containerNotify: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       marginTop:20
      },
      texto: {
        fontFamily: fonts.texto,
        fontSize: 14
      }
})
