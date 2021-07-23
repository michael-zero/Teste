import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView, Alert} from 'react-native'
import Constants from 'expo-constants'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton, Button, TextInput } from 'react-native-paper';

import DadoUsuario from '../components/DadoUsuario'

const DadosLimpeza = () => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisibleZona, setModalVisibleZona] = React.useState(false);

    const [checked, setChecked] = React.useState();
    const [checkedZona, setCheckedZona] = React.useState();

    const [outros, setOutros] = React.useState(null);
    const [finalidade, setFinalidade] = React.useState(null);
    const [bairro, setBairro] = React.useState(null);
    const [endereco, setEndereco] = React.useState(null);
    const [referencia, setReferencia] = React.useState(null);
   
    const solicitacoes =  [{titulo: 'Limpeza de Fossa - (Baixa Renda)', itemNome: 'fossa'},
    {titulo: 'Limpeza de Praça', itemNome: 'praca'},
    {titulo: 'Limpeza de Rua', itemNome: 'rua'},
    {titulo: 'Limpeza de Galeria (Área pública)', itemNome: 'galeria'},
    {titulo: 'Limpeza de Área Verde (Áreas do Município)', itemNome: 'verde'},
    {titulo: 'Outros', itemNome: 'outros'}]

    const zonas = [{titulo: 'SDU Centro/Norte', itemNome: 'centro/norte'},
    {titulo: 'SDU Leste', itemNome: 'leste'},
    {titulo: 'SDU Sudeste', itemNome: 'sudeste'},
    {titulo: 'SDU Sul', itemNome: 'sul'}
  ]

    return (
        <SafeAreaView style={styles.screen}>
            <View style={{marginVertical: 20}}>
           
            <DadoUsuario select={checked} chave='Tipo de Solicitação' icone={true} nomeIcone="arrow-down-drop-circle-outline" onPress={() => setModalVisible(true)}/>
       
            {/* MODAL */}
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal foi fechado');
            }}>
               <CaixaSolicitacao itens={solicitacoes} setModalVisible={setModalVisible} modalVisible={modalVisible} checked={checked} setChecked={setChecked}/>
            </Modal>
            {/* FIM DO MODAL */}
            
            {
            checked === 'outros' &&
            <TextInput onChangeText={txt => setOutros(txt)}
             style={{marginHorizontal: 20,height: 40}}
             placeholder='Solicitação'  />
            
            // <Input 
            // onChangeText={txt => setOutros(txt)}
            // texto='Outros' placeholder='solicitacao' inputStyle={{justifyContent: 'flex-end'}}/>
           
            }

          <DadoUsuario select={checkedZona} chave='Destino' icone={true} nomeIcone="arrow-down-drop-circle-outline" onPress={() => setModalVisibleZona(true)}/>
           
           
            {/* Outro MODAL */}
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleZona}
            onRequestClose={() => {
            Alert.alert('Modal foi fechado');
            }}>
               <CaixaSolicitacao 
               containerStyle={{height: 210}} 
               containerItens={{paddingHorizontal: 10}}
               itens={zonas} setModalVisible={setModalVisibleZona} modalVisible={modalVisibleZona} checked={checkedZona} setChecked={setCheckedZona}/>
            </Modal>

            {/* FIM DO MODAL DESTINO */}

            <TextInput
            style={{marginHorizontal: 20,height: 80}}
            onChangeText={txt => setFinalidade(txt)}
            placeholder='Finalidade'
            />

            {/* <Input 
            onChangeText={txt => setFinalidade(txt)}
            containerStyle={{height: 120}} placeholder='finalidade' texto='Finalidade :'/> */}
            
            <View style={{height: 180, justifyContent: 'space-evenly'}}>

              <TextInput
                style={{marginHorizontal: 20,height: 40}}
                onChangeText={txt => setEndereco(txt)}
                placeholder='Endereço'
              />

              {/* <Input 
              onChangeText={txt => setEndereco(txt)}
              placeholder='Rua 19 ...' texto='Endereço :'/> */}
              
              <TextInput
              style={{marginHorizontal: 20, height: 40}}
              onChangeText={txt => setBairro(txt)}
              placeholder='Bairro'
              />

              {/* <Input 
              onChangeText={txt => setBairro(txt)}
              placeholder='Marquês ...' texto='Bairro :'/> */}

              <TextInput
               style={{marginHorizontal: 20, height: 40}}
               onChangeText={txt => setReferencia(txt)}
               placeholder='Referência'
              />

              {/* <Input 
              onChangeText={txt => setReferencia(txt)}
              placeholder='Prox ao Albertão ...' texto='Referência :'/> */}
            </View>


            <DadoUsuario containerDadoUsu={{marginTop: 20}} chave='Salvar Localização' icone={true} nomeIcone='plus'/>

              {/* Botão de ENVIAR */}
              
       </View>

              <View>
               <Button mode='outlined' color='blue' style={{height: 50, marginBottom: 20}}>Salvar Alterações</Button>
              </View>

              {/* <TouchableOpacity onPress={() => Alert.alert("Enviando")}
               style={{
               backgroundColor: 'white',
               width: '100%', position: 'absolute', bottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '50%', height: 50, justifyContent: 'center'}}>
                       <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Salvar Alterações</Text>
                    </View>
              </TouchableOpacity> */}

           
        </SafeAreaView>
    )
}

const Input = ({containerStyle, texto, textoStyle, inputStyle, ...outrasProps}) => {
  return (
    <View style={[styles.containerInput, containerStyle]}>
    <Text style={{fontSize: 16, marginRight: 10, fontWeight: 'bold', ...textoStyle}}>{texto}</Text>
    <TextInput style={[styles.outros, { textAlignVertical: 'top', ...inputStyle}]} numberOfLines={4} {...outrasProps}/>
  </View>
  
  )
}

const Solicitacao = ({titulo, itemNome, checked, setChecked}) => {
  return (
    <View style={styles.containerItem}>
    <RadioButton
            color='blue' 
            value={itemNome}
            status={checked === itemNome ? 'checked' : 'unchecked'}
            onPress={() => setChecked(itemNome)}/>
    <Text style={styles.item}>{titulo}</Text>
    </View>
  )
}

const CaixaSolicitacao = ({modalVisible, containerItens, containerStyle, setModalVisible, itens, checked, setChecked}) => {
    return(
      <View style={styles.centeredView}>
      <View style={[styles.modalView, {...containerStyle}]}>

          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10}}>
             
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Escolha</Text>
             
              {/* BTN FECHAR MODAL */}
              <TouchableOpacity
              
              onPress={() => {
                  setModalVisible(!modalVisible);
              }}>
                
                  <MaterialCommunityIcons style={styles.modalClose} name="close-outline" size={25} color="black" />
              </TouchableOpacity>

          </View>

          <ScrollView style={[{flex: 1, width: '100%'}, {...containerItens}]}>
             {
               itens.map(i => {
                 return(
                  <Solicitacao key={i.itemNome} titulo={i.titulo} itemNome={i.itemNome} checked={checked} setChecked={setChecked}/>
                 )
               })
             }
              
          </ScrollView>
      </View>
      </View>
    )
}

export default DadosLimpeza

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        justifyContent: 'space-between'
      }, 
      containerTitulo:{
        backgroundColor: '#CCD1D1',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
      },
      containerTituloTxt:{
        fontSize: 16,
        marginLeft: 20,
        fontWeight: 'bold'
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        width: 330,
        height: 400,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      modalClose: {
      },
      containerItem: {
          // borderWidth: 1,
          paddingHorizontal: 5,
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
      },
      item: {
        fontSize: 13
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1
      },
      outros: {
        fontSize: 16,
        flex: 1,
        
      },
      containerInput: {
        flexDirection: 'row',
        marginHorizontal: 22,
        paddingTop: 3,
        marginTop: 5,
        borderRadius:10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#CCD1D1',
        borderWidth: 1,
        height: 30,
        paddingHorizontal: 5
      }
})
