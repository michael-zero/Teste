import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Screen from '../components/Screen'
import { useNavigation } from '@react-navigation/native';

// Icones
import { FontAwesome5 } from '@expo/vector-icons';
import Pesquisa from '../components/Pesquisa';

import {getDistance} from '../calc/index'
import { DadosContext } from '../DadosContext';
import colors from '../config/colors'
import fonts from '../config/fonts'

// Componente do Item 
const ItemView = ({item, location}) => {
  
    const navigation = useNavigation()
    const {setRegiao, setUBS} = React.useContext(DadosContext)

    return (
    <TouchableOpacity onPress={() => {
        // console.log(item)
        setUBS(item)
        setRegiao({ latitude: Number(item.lat),longitude:  Number(item.long), latitudeDelta: 0.014, longitudeDelta: 0.014})
        // console.log("regiao ubs = ", regiao)
        navigation.navigate('Início')
    }}>
      <View style={styles.container}>
        {/* View TITULO - NOME */}
        
        {/* #293879, #4356FF - azul  */}
        <View style={{backgroundColor: colors.fundoTeresinaDigital, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[styles.titulo, {paddingTop: 5, paddingLeft: 5, marginBottom: 5}]}>
            {item.name}
            </Text>
        </View>

            <View style={styles.containerItens}>
                <View style={styles.item}>
                    <FontAwesome5 name="phone-square-alt" size={20} color="black"/>
                    <Text style={[styles.tel, {marginLeft: 5}]}>{item.phone}</Text>
                </View>
                <View style={styles.item}>
                    <FontAwesome5 name="map-marker-alt" size={20} color="black" />
                    <Text style={styles.texto}>{item.address}</Text>
                    <Text style={[styles.texto, {fontStyle: 'italic'}]}>, {(getDistance(location.latitude, location.longitude, item.lat, item.long)/1000).toFixed(2)} KM </Text>
                   
                </View>
                 
                <View style={styles.item}>
                <Text style={[styles.texto, {fontSize: 14, color: 'black', fontFamily: fonts.titulo}]}>Zona: {item.zone}</Text>
                </View>
              
                
               
            </View>
      </View>
    </TouchableOpacity>
    );
  };

const Unidades = ({route}) => {

    
    // datas <=> unidades
    const {datas, location} = route.params 
   
    // console.log(location)

    const [filtrados, setFiltrados] = React.useState()
    
    const search = (value) => {
       
        if(value){
            const filtrados = datas.filter( item => {
                const minusculo = item.name.toLowerCase()
                const itemMinu = value.toLowerCase()
                return minusculo.indexOf(itemMinu) > -1
            })

           setFiltrados(filtrados)
            
        }else{
           
            setFiltrados(datas)
        }
    }


    return (
        <Screen style={styles.caixaTela}>
            <Pesquisa pesquisar={search}/>

            {
                datas && <FlatList
                data={filtrados}
                keyExtractor={d => d.name}
                initialNumToRender={2}
                renderItem={({item, index}, ) => <ItemView index={index} item={item} location={location}/>}
                />
            }
        </Screen>
    )
}

export default Unidades

const styles = StyleSheet.create({
    caixaTela: {
        // borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#F9FAFC"
        // borderColor: "#4356FF"
        
    },
    container:{
        width: '90%',
        height: 150,
        marginTop: 20,
        marginHorizontal: 10,
        overflow: 'hidden',
        borderColor: "#D3E2E5",
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center'
       
    }, 
    titulo: {
        fontSize: 14,
        padding: 3,
        color: 'white',
        fontFamily: fonts.titulo
    },
    texto:{
        marginLeft: 5, 
        color: 'gray', 
        fontSize: 16,
        fontFamily: fonts.texto
       
    },
    tel:{
       fontSize: 16,
       fontFamily: fonts.texto
    },
    containerItens: {
        paddingLeft: 10,
        paddingTop: 3,
    },
    item:{
        flexDirection: 'row', 
        paddingLeft: 5, 
        alignItems: 'center',
        marginTop: 10,
    }
})
