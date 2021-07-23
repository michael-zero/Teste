import React from 'react'
import { StyleSheet, Text, View, FlatList, VirtualizedList, TouchableOpacity, Button, Alert} from 'react-native'
import {  RadioButton } from 'react-native-paper';
import { DadosContext } from '../DadosContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Pesquisa from './Pesquisa';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ListarBairros = ({checked, setChecked, bairros, setModalVisible, modal}) => {
    
   const {setBairro} = React.useContext(DadosContext)

   const bs = [{
    "code": "60 ",
    "bairro": "AEROPORTO ",
    "zona": "NORTE ",
    "descricao": "O bairro Aeroporto compreende a área contida no seguinte perímetro partindo do cruzamento da Av. Santos Dumont com a Rua Sergipe, segue, por esta, até a Rua Pamaguá e daí até a Av. Campo Maior; prossegue, por esta, até a Rua Anísio Pires, pela qual atinge a Av. Centenário; deste ponto, segue rumo à Av. União, depois, à Rua Primeiro de Maio, por onde segue até a Rua Pernambuco; daí, pela Rua Área Leão e novamente pela Rua Pernambuco, até a Av. Santos Dumont, pela qual retoma ao ponto de partida. ",
    "inicio": "1837h ",
    "termino": "0210h ",
    "dias": "TER,QUI e SAB NOTURNO "
}, {
    "code": "61 ",
    "bairro": "ÁGUA MINERAL ",
    "zona": "NORTE ",
    "descricao": "O bairro Água Mineral compreende a área contida no seguinte perímetro partindo do encontro da Rua Quilombo de Palmares com a Av. Duque de Caxias, segue, por esta, e pela Rua Emanuel Liarth, até o limite do terreno da EMBRAPA; daí, continua até o eixo do Rio Poti, por onde atinge o alinhamento da Rua Quilombo de Palmares e, retoma ao ponto de origem. ",
    "inicio": "1834h ",
    "termino": "0147h ",
    "dias": "TER,QUI e SAB NOTURNO "
   }]
   
  //  console.log(bairros.length)
   const [filtrados, setFiltrados] = React.useState()

   const search = (value) => {
       if(value){
           const filtrados = bairros.filter( item => {
               const minusculo = item.bairro.toLowerCase()
               const itemMinu = value.toLowerCase()
               return minusculo.substr(0, 1) === itemMinu.substr(0, 1)
              //  minusculo.indexOf(itemMinu) > -1
           })

          // setNumB(filtrados.length)
          setFiltrados(filtrados)
           
       }else{
           setFiltrados(bairros)
       }
   }

  



   const Item = ({ bairro }) => {
      // console.log("=============",bairro)
     return (
      //  <Text key={bairro["bairro"].bairro}>{bairro["bairro"].bairro}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            { bairro && 
            <>
            <RadioButton
              color='blue' 
              value={bairro["item"].bairro}
              status={ checked === bairro["item"].bairro ? 'checked' : 'unchecked' }
              onPress={() => {
                setChecked(bairro["item"].bairro)
                setBairro(bairro["item"])
              }}
            />
           <Text>{bairro["item"].bairro}</Text>
           </>}
       </View>
   
    );}


  //  React.useEffect(() => {
  //    console.log(flatlistRef)
  //  })


    return (
      <SafeAreaView>
          {/* Barra de pesquisa */}
          <View style={{flexDirection: 'row', width: '100%',
              alignItems: 'center', marginBottom: 20}}>
              <Pesquisa container={{width: 300, marginRight: 20}} place='Bairro' pesquisar={search}/>
              {/* CLOSE */}
              <TouchableOpacity
              style={{flexDirection: 'row', alignSelf: 'flex-end', right: 20, top: -5}}
              onPress={() => {
                  setModalVisible(!modal);
              }}>
      
                  <MaterialCommunityIcons style={styles.modalClose} name="close-outline" size={25} color="black" />
              </TouchableOpacity>
          </View>

             { filtrados && <FlatList
                data={filtrados}
                keyExtractor={item => item.code}
                renderItem={(item) => <Item bairro={item}/>}
              />}
      
      </SafeAreaView>
    )
}

export default ListarBairros

const styles = StyleSheet.create({
  modalClose:{
  }
})
