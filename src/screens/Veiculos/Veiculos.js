import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import Screen from '../../components/Screen'
import Header from '../../components/Header'
import {Button} from 'react-native-paper'

import AsyncStorage from '@react-native-async-storage/async-storage';
import fonts from '../../config/fonts'
import colors from '../../config/colors'

// Icones
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Veiculos = ({navigation}) => {
    
    const [veiculos, setVeiculos] = React.useState([]);
    const [excluiu, setExcluiu] = React.useState(false)
    const buscar =  async () => {
      
      try {
         const res = await AsyncStorage.getItem('car')
         const obj = JSON.parse(res)
         
         setVeiculos([...obj])
        
      } catch (error) {
          console.log(error.message)
      }

          
    }

    React.useEffect(() => navigation.addListener('focus', (e) => {
        buscar()
    })
    ,[])

    React.useEffect(() => {
       if(excluiu){
        salvar()
       }
      }, [veiculos])
    
    const salvar = async () => {
         await AsyncStorage.setItem('car', JSON.stringify(veiculos));
    }

    const excluir = (placa) => {
         Alert.alert('Deletar','Tem certeza que deseja deletar?', [
            {text: 'Não'}, 
            {text: 'Sim', onPress: () => {
                const vs = veiculos.filter(v => v.placa !== placa)
                setExcluiu(true)
                setVeiculos([...vs])
                Alert.alert("Deletar",`Veículo com a placa ${placa} deletado!`)}}, 
         ])
    }

  

    const ModeloVeiculo = ({veiculo}) => {
        
        return <TouchableOpacity onPress={() => navigation.navigate("Editar Veiculo", {veiculo: veiculo})}>
        <View style={styles.container}>
            <View style={styles.containerFilho}>
                {/* MODELO E RENAVAM */}
                <View style={styles.subcontainer}>
                   
                   <View style={styles.item}>
                        <Ionicons name="car-sport-outline" size={22} color="gray" />
                        <Text style={[styles.texto, {fontFamily: fonts.titulo}]}>{veiculo.modelo}</Text>
                   </View>
                   <View style={styles.item}>
                       <AntDesign name="barcode" size={22} color="gray" />
                       <Text style={styles.texto}>{veiculo.renavam}</Text>
                   </View>
                
                </View>

                <View>
                    {/* PLACA */}
                    <View style={styles.placa}>
                        <View style={{height: 10, backgroundColor: colors.fundoTeresinaDigital}}/>
                        <View style={{alignItems: 'center'}}>
                             <Text style={styles.placaTxt}>{veiculo.placa.toUpperCase()}</Text>
                        </View>
                    </View>
                </View>
            </View> 
            {/* FIm LINHA 1*/}

            <View style={[styles.subcontainer, {borderRightColor: 'white'}]}>
                <View style={styles.item}>
                    <AntDesign name="calendar" size={22} color="gray" />
                    <Text style={styles.texto}>{veiculo.ano}</Text>
                </View>

                <View style={[styles.item]}>
                    <Ionicons name="ios-color-palette-sharp" size={22} color="gray" />
                    <Text style={styles.texto}>{veiculo.cor}</Text>
                    {/*============================================  */}
                   {/* Excluir */}
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <TouchableOpacity onPress={() => excluir(veiculo.placa)}>
                             <Feather name="trash-2" size={20} color={colors.vermelho} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <View style={{flex: 1, backgroundColor: colors.lightgray}}/> */}
        </View>
    </TouchableOpacity>
    }

    return (
        <Screen style={{backgroundColor: 'white'}}>
            <Header onPress={() => navigation.goBack()} titulo='Meus Veículos'/>

            <ScrollView style={{flex: 1}}>
                 {
                     veiculos.map((v,i) => <ModeloVeiculo key={i}  veiculo={v}/> )
                 }
            </ScrollView>
            {/* <View style={{flex: 1, alignItems: 'center'}}>
                       <ModeloVeiculo/>
                 
            </View> */}
            {/* <Button onPress={() => console.log(veiculos.length)}>Buscar Veiculos</Button> */}


        </Screen>
    )
}

export default Veiculos

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: '90%',
        borderWidth: 2,
        borderColor: colors.medium,
        marginTop: 10,
        borderRadius: 3,
        alignSelf: 'center',
    },
    containerFilho:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.lightgray,
        // alignItems: 'center'
        // borderWidth: 1
    },
    subcontainer: {
        padding: 5,
        
    },
    placa: {
        height: 40,
        width: 120,
        borderWidth: 1,
        borderColor: colors.medium,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 5,
        
    },
    placaTxt: {
        fontFamily: fonts.titulo,
        fontSize: 16,
        color: colors.medium
    },
    texto: {
        fontFamily: fonts.texto,
        fontSize: 16,
        marginLeft: 10,
    },
    item: {
        flexDirection: 'row',
        marginVertical: 2
    }
})
