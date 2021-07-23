import React from 'react';
import { StyleSheet } from 'react-native';

import Routes from './src/routes/routes'
import {DadosContext} from './src/DadosContext'
import { NavigationContainer } from '@react-navigation/native';

// ======== FONTES
import {useFonts ,Montserrat_400Regular, Montserrat_100Thin_Italic, 
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_300Light,
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase
//  import {database} from './config'

export default function App() {

  const [logado, setLogado] = React.useState(false)
  const [UBS, setUBS] = React.useState()
  const [regiao, setRegiao] = React.useState()
  const [bairro, setBairro] = React.useState()
  const [unidades, setUnidades] = React.useState([])

  const getToken = async () => {
    try {
      let userData = await AsyncStorage.getItem("@tdigital-usuario");
      if(userData){
        setLogado(true)
      }
    } catch (error) {
      console.log("Algo deu errado", error);
    }
  }

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
      alert("ERRo no bd")
      console.log(error)
    }

    
  }

  

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_100Thin_Italic,
    Montserrat_500Medium,
    Montserrat_300Light
  })

  // React.useEffect(() => {
    
  //   // buscarUnidades()
   
    
  // },[])

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
  <DadosContext.Provider value={{logado, setLogado, unidades, setUnidades, regiao, setRegiao, bairro, setBairro, UBS, setUBS, getToken}}>  
    <NavigationContainer>
     <Routes/>
    </NavigationContainer>
  </DadosContext.Provider>
   
  );
}
