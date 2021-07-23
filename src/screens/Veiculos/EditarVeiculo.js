import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Screen from '../../components/Screen'
import Header from '../../components/Header'

import ItemCarro from '../../components/ItemCarro'
import {Button} from 'react-native-paper'

// Icones
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors'
import fonts from '../../config/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditarVeiculo = ({route, navigation}) => {
    const {veiculo} = route.params

    const [veiculos, setVeiculos]  = React.useState([])
    const [novoVeiculo, setNovoVeiculo] = React.useState(veiculo)
    const [editou, setEditou] = React.useState(false)
 
    const buscarVeiculos = async () => {
        const res = await AsyncStorage.getItem('car')
        const carObject = JSON.parse(res)
        setVeiculos([...carObject])
      
    }

    const salvarEdicao = (placa) => {
       const vs =  veiculos.filter(v => v.placa !== placa)
       vs.push(novoVeiculo)

       setVeiculos([...vs])
       Alert.alert("Alterado", "Dados do veículo alterado com sucesso!")
       navigation.goBack()
    }

    React.useEffect(() => {
        buscarVeiculos()
    }, [])

    const salvarStorage = async () => {
        await AsyncStorage.setItem('car', JSON.stringify(veiculos));
    }

    React.useEffect(() => {
        if(editou){
            salvarStorage()
        }
    }, [editou])

    return (
        <Screen>
            <Header titulo='Veículo'/>
            <View style={styles.container}>
                {/* <Text>{veiculos.length}</Text> */}
                <View style={styles.containerInputs}>
                    <ItemCarro nome='Modelo'  
                         onChangeText={(text) => setNovoVeiculo(ant => ({...ant, modelo: text}))}
                         value={novoVeiculo.modelo} >
                         <Ionicons name="car-sport-outline" size={22} color="gray" />
                    </ItemCarro>
                    <ItemCarro nome='Ano' keyboardType='numeric' value={novoVeiculo.ano} 
                    onChangeText={(text) => setNovoVeiculo(ant => ({...ant, ano: text}))}
                    >
                         <AntDesign name="calendar" size={22} color="gray" />
                    </ItemCarro>

                    <ItemCarro nome='Cor' value={novoVeiculo.cor}
                    onChangeText={(text) => setNovoVeiculo(ant => ({...ant, cor: text}))}
                    
                    >
                         <Ionicons name="ios-color-palette-sharp" size={22} color="gray" />
                    </ItemCarro>
                   
                    <ItemCarro nome='Marca' value={novoVeiculo.marca}
                   onChangeText={(text) => setNovoVeiculo(ant => ({...ant, marca: text}))}
                    
                    >
                        <MaterialCommunityIcons name="car-cog" size={22} color="gray" />
                    </ItemCarro>
                   
                    <ItemCarro nome='Placa *' value={novoVeiculo.placa}
                   onChangeText={(text) => setNovoVeiculo(ant => ({...ant, placa: text}))}
                    
                    >
                         <MaterialCommunityIcons name="card-text-outline" size={22} color="gray" />
                    </ItemCarro>
                    
                    <ItemCarro nome='Renavam'  value={novoVeiculo.renavam}
                    onChangeText={(text) => setNovoVeiculo(ant => ({...ant, renavam: text}))}
                    >
                    <AntDesign name="barcode" size={22} color="gray" />
                    </ItemCarro>
                </View>
               
                <Button color='blue' onPress={() => {
                     salvarEdicao(veiculo.placa)
                     setEditou(true)
                }}>Salvar</Button>
           
            </View>

        </Screen>
        )
}

export default EditarVeiculo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
        // borderWidth: 1
    },
    containerTela: {
        marginTop: 10,
        paddingHorizontal:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: colors.cinzinha
    },
    telaTxt: {
        fontSize: 16,
        fontFamily: fonts.Montserrat_500Medium
    },
    iconeTela: {
        width: 40, 
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerInputs: {
    }
})
