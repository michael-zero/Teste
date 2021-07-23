import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator,TouchableWithoutFeedback, Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import { DadosContext } from '../DadosContext'
import {database} from '../../config'
// import config from '../../config/index.json'

//Icones 
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { calcularUnidadeMaisProxima, unidadesMaisProximas, getDistance } from '../calc/index'
import BtnMapa from '../components/BtnMapa'
import UnidadeMaisProxima from '../components/UnidadeMaisProxima'

// ========= configs
import fonts from '../config/fonts'
import colors from '../config/colors'


const Inicio = ({ navigation }) => {

    const { unidades, setUnidades, regiao, setRegiao, UBS, getToken } = React.useContext(DadosContext)

    const [location, setLocation] = React.useState({//Região inicial -Antes de carregar a localizacao do usuario - Centro de Teresina
        latitude: -5.0903678,
        longitude: -42.8105988,
        latitudeDelta: 0.014,
        longitudeDelta: 0.014
      })
    
    const [unidadeProxima, setUnidadeProxima] = React.useState({})
    const [abrirModalUP, setAbrirModalUP] = React.useState(false)
    const [unidadesDist, setUnidadesDist] = React.useState([])


    const buscarUnidades = async () => {

        try {
          var unidadesRef = await database.ref('unidades/');
          const unitys = []
        
          const data = await (await unidadesRef.get()).val()
          
          for(var i in data){
            unitys.push(data[i])
          }
          
          setUnidades([...unitys])
        } catch (error) {
          alert(error.message)
          console.log(error.message)
        }
    
        
      }


    const obterLocalizacao = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            
            if (!granted) {
                alert('Precisamos da sua localização!');
                return
            }

            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync()
            setLocation({ latitude, longitude, latitudeDelta: 0.014, longitudeDelta: 0.014 })
            
            Alert.alert("Localização", `\n ${location.latitude} \n${location.longitude}`)
           
        } catch (e) {
            console.log(e)
        }

    }

    React.useEffect(() => {
        // console.disableYellowBox = true;
        // getToken()
        obterLocalizacao()  
        // buscarUnidades()
    }, [])

    const buscarUnidade = () => {
        const unidade = calcularUnidadeMaisProxima(unidades, location)

        if (unidade) {
            setAbrirModalUP(true)
            setUnidadeProxima(unidade)
        }
    }

    const unidadesComDistancia = (unidades) => {
       console.log("unidades =", unidades.length)
       if(location){ unidades.map(unidade => {
            let dist = getDistance(location.latitude, location.longitude, unidade.lat, unidade.long)
            unidade.distancia = dist/1000
            if(unidade.name === "UBS Dr. José Wilson Batista - Vermelha"){
                console.log(unidade.distancia)
            }
            setUnidadesDist([...unidadesDist, unidade])
        })}
    }
 

    return (
        <View style={styles.container}>
            
            {console.log(unidades.length)}

            {/* Header */}
            <View style={styles.navegacao}>
                <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
                    <Feather name="menu" size={38} color="white" style={{ position: 'absolute', left: 0 }} />
                </TouchableWithoutFeedback>
                <Text style={styles.titulo}>Unidades da Prefeitura</Text>
            </View>


            <View style={styles.mapContainer}>
                {
                    location && <MapView style={[styles.map]}
                        showsUserLocation={true}
                        region={regiao ? { latitude: regiao.latitude, longitude: regiao.longitude, latitudeDelta: 0.014, longitudeDelta: 0.014 } : { latitude: location.latitude, longitude: location.longitude, latitudeDelta: 0.014, longitudeDelta: 0.014 }}
                        zoomEnabled={true}
                        initialRegion={
                            // regiao ? { latitude: regiao.latitude, longitude: regiao.longitude, latitudeDelta: 0.014, longitudeDelta: 0.014 }
                            //     :
                                { latitude: location.latitude, longitude: location.longitude, latitudeDelta: 0.014, longitudeDelta: 0.014 }
                        }>


                        {/* {
                            UBS && <Marker key={UBS.name} title={UBS.name}
                                coordinate={{ latitude: Number(UBS.lat), longitude: Number(UBS.long) }}>
                                <MaterialCommunityIcons name="hospital-marker" size={35} color="blue" />
                            </Marker>
                        } */}

                    {/* Se não tem localização */}
                    </MapView> 
                }


            </View>
            {/* Fim do container do mapa acima */}


            {/* Modal */}
            {/* Container da unidade mais proxima  */}


            {

                abrirModalUP && <UnidadeMaisProxima setAbrirModalUP={setAbrirModalUP} unidadeProxima={unidadeProxima} />

            }


            {/* Botões em cima do MAPA */}
            {location && <BtnMapa
                unidades={unidades} location={location} setRegiao={setRegiao} buscarUnidade={buscarUnidade} navigation={navigation} />}

        </View>

    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    navegacao: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        // backgroundColor: "#4356FF",
        backgroundColor: colors.fundoTeresinaDigital,
        // marginTop: Constants.statusBarHeight
    },
    mapContainer: {
        flex: 1,
        alignSelf: 'center',
        height: 700,
        width: '100%',

    },
    map: {
        width: '100%',
        height: '100%',
    },
    titulo: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.titulo

        // color: '#323232' //outro tom de preto
        // color: "#4356FF"
    },
    icone: {
        borderWidth: 1,
        width: 60,
        height: 60,
    },

})