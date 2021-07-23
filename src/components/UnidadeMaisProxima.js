import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

//Icones 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const UnidadeMaisProxima = ({setAbrirModalUP, unidadeProxima}) => {

    return (
        <View style={[styles.containerunidadeMaisProxima]}>
                <View style={styles.containerModalClose}>
                <Text style={{width: '75%', fontWeight: 'bold'}}>{unidadeProxima.unidade.name}</Text>
                {/* Fechar MODAL UP */}
                <AntDesign onPress={() => { setAbrirModalUP(false)}} name="closesquare" size={22} color="black" />
                </View>

                <View style={styles.containerunidadeMaisProximaInfo}>
                    <View style={[styles.unidadeProximaDistancia]}>
                        <MaterialCommunityIcons name="map-marker" size={24} color="#1E90FF" />
                            {/* Seta */}
                            <View style={{marginHorizontal: 5}}> 
                                <FontAwesome5 name="long-arrow-alt-right" size={18} color="gray"/>
                            </View>
                            <MaterialCommunityIcons name="map-marker-outline" size={24} color="#1E90FF"/>

                        {/* KM */}
                        <View style={{marginLeft: 5}}>
                                <Text style={{color: 'gray'}}>{unidadeProxima.distancia.toFixed(2)} km</Text>
                        </View>

                </View> 
                    {/* Rua */}
                    <Text style={{fontSize: 12, marginTop: 5, paddingLeft: 10}}>{unidadeProxima.unidade.address}</Text>

                    {/* Itens graficos */}
                    <View style={styles.itensGraficos}>
                        {/* Informacao */}
                        <View style={styles.caixaItem}>
                        <Ionicons name="ios-information-circle-outline" size={26} color="#1E90FF" />  
                        </View>
                        {/* Telefone - ligar */}
                        <View style={styles.caixaItem}> 
                        <Feather name="phone" size={24} color="#1E90FF" />
                        </View>
                        {/* Localizar */}
                        
                        <View style={styles.caixaItem}>
                            <MaterialCommunityIcons name="map-marker" size={24} color="#1E90FF" />
                        </View> 
                    
                        
                    </View>
            
                </View>

    </View>
    )
}

export default UnidadeMaisProxima

const styles = StyleSheet.create({
    containerunidadeMaisProxima: {
        width: 200,
        height: 160,
        borderWidth: 1,
        position: 'absolute',
        bottom: 85, 
        left: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        
        
    },
    containerModalClose: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 5,
    },
 
    unidadeProximaDistancia: {
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itensGraficos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10
    },
    caixaItem:{
        width: 40, 
        height: 40, 
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 5,
    }
})
