import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Screen from '../../components/Screen'
import Header from '../../components/Header'
import {Button, TextInput} from 'react-native-paper'
import fonts from '../../config/fonts';

// Icones
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemCarro from '../../components/ItemCarro';


const AddVeiculo = ({navigation}) => {

    const [btn, setBtn] = React.useState(false)
    const [veiculos, setVeiculos]  = React.useState([])
    const [veiculo, setVeiculo] = React.useState({modelo:"D",ano:"D",cor:"Hug",marca:"Ttyf",placa:"Drt",renavam:"Gggy"})

    const buscarVeiculos = async () => {
        const res = await AsyncStorage.getItem('car')
        const carObject = JSON.parse(res)
        setVeiculos([...carObject])
      
    }

    React.useEffect(() => {
        buscarVeiculos()
    }, [])


    React.useEffect(() => {
      if(btn === true){
        salvar()
      }
    }, [btn])

    const salvar = async () => {
         await AsyncStorage.setItem('car', JSON.stringify(veiculos));
    }

    const cadastrarVeiculo = async () => {
       try {
                 setVeiculos((p) => [...p, veiculo])
                 navigation.navigate('Meus Veiculos')
       } catch (error) {
           console.log(error.message)
       }
        
       
    }

    return (
        <Screen>
            <Header titulo='Adicionar Veículo'/>

            <View style={styles.container}>
                {/* <Text>{veiculos.length}</Text> */}
                <View style={styles.containerInputs}>
                    <ItemCarro nome='Modelo'onChangeText={(text) => setVeiculo(ant => ({...ant, modelo: text}))}>
                         <Ionicons name="car-sport-outline" size={22} color="gray" />
                    </ItemCarro>

                    <ItemCarro nome='Ano' keyboardType='numeric' onChangeText={(text) => setVeiculo(ant => ({...ant, ano: text}))}>
                         <AntDesign name="calendar" size={22} color="gray" />
                    </ItemCarro>
                    <ItemCarro nome='Cor'onChangeText={(text) => setVeiculo(ant => ({...ant, cor: text}))}>
                         <Ionicons name="ios-color-palette-sharp" size={22} color="gray" />
                    </ItemCarro>
                   
                    <ItemCarro nome='Marca'onChangeText={(text) => setVeiculo(ant => ({...ant, marca: text}))}>
                        <MaterialCommunityIcons name="car-cog" size={22} color="gray" />
                    </ItemCarro>
                   
                    <ItemCarro nome='Placa *' onChangeText={(text) => setVeiculo(ant => ({...ant, placa: text}))}>
                         <MaterialCommunityIcons name="card-text-outline" size={22} color="gray" />
                    </ItemCarro>
                    
                    <ItemCarro nome='Renavam' onChangeText={(text) => setVeiculo(ant => ({...ant, renavam: text}))}>
                    <AntDesign name="barcode" size={22} color="gray" />
                    </ItemCarro>
                </View>
                  
            </View>
            <Button mode='outlined' color='blue' onPress={() => {
                cadastrarVeiculo()
                setBtn(true)
                }}>Adicionar</Button>
            {/* <Button mode='outlined' color='blue' onPress={() => console.log(veiculos)}>Vehicles</Button> */}
        </Screen>
    )
}

export default AddVeiculo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
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
