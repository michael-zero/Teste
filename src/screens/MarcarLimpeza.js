import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback,  View } from 'react-native'
import Constants from 'expo-constants'
import DadoUsuario from '../components/DadoUsuario'
import {Button} from 'react-native-paper'

import * as DocumentPicker from 'expo-document-picker';
import * as imagePicker from 'expo-image-picker'

import fonts from '../config/fonts'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MarcarLimpeza = ({navigation}) => {
 
    const [imageUri1, setImageUri1] = React.useState(null)
    const [imageUri2, setImageUri2] = React.useState(null)
    const [imageUri3, setImageUri3] = React.useState(null)
    const [imageUri4, setImageUri4] = React.useState(null)
    const [imageUri5, setImageUri5] = React.useState(null)

    const [doc, setDoc] = React.useState(null)


    const obterPermissao = async () => {
      const {granted} = await imagePicker.requestMediaLibraryPermissionsAsync()

      if(!granted){
          Alert.alert('Desculpe :/ É necessário dar permissão para acessar sua câmera!')
      }
    }



    React.useEffect(() => {
        obterPermissao()
    }, [])

    const Header = ({titulo, icone}) => {
      return (
        <View style={[styles.containerTitulo, {flexDirection: 'row'}]}>
        { icone && <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
           <MaterialCommunityIcons  name="arrow-left" size={24} color="black"  style={{position: 'absolute', left: 5}} />
        </TouchableWithoutFeedback>}
        <Text style={styles.containerTituloTxt}>{titulo}</Text>
       </View> 
      )
    }

    const obterImagem = async (imageUri, setImageUri) => {
      
      if(!imageUri){
      let result = await imagePicker.launchImageLibraryAsync({
        mediaTypes: imagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      // console.log(result);
  
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    }else{
      Alert.alert('Deletar','Tem certeza que deseja cancelar o envio?', [
        {text: 'Não'}, 
        {text: 'Sim', onPress: () => setImageUri(null)}, 
         
     ])
    }
    };

    const obterDoc = async () => {
     if(!doc){ try {
       const doc = await DocumentPicker.getDocumentAsync({type: 'application/pdf'}) 
       const {type} = doc
       if(type === 'success'){
         setDoc(doc)
       }else{
         Alert.alert('Sem PDF', 'Você não cadastrou o PDF')
       }
      } catch (error) {
        console.log(error) 
      }}else{
        Alert.alert('Deletar','Tem certeza que deseja cancelar o envio do PDF?', [
          {text: 'Não'}, 
          {text: 'Sim', onPress: () => setDoc(null)}, 
           
       ])
      }
    }

    return (
      <SafeAreaView style={styles.screen}>
         
         {/* USUARIO */}
         <Header titulo="Usuário" icone={true}/>
        

          <DadoUsuario chave="Nome do Usuário" valor="John Doe"/>
          <DadoUsuario chave="CPF" valor="006.250.xxx-xx"/>
          <DadoUsuario chave="Endereço" valor="Rua do anjos, roraima"/>

        
        {/* DADOS OBRIG.. */}
        <Header titulo='Dados Obrigatórios'/>

          {/* Vai para outra TELA */}
          <DadoUsuario chave="Preencher Dados"
            onPress={() => navigation.navigate("DadosLimpeza")}
            icone={true}
            nomeIcone="arrow-right"
            navigation={navigation}
          />

          <DadoUsuario chave="RG" icone={true}
            temImagem={imageUri1}
            onPress={() => obterImagem(imageUri1,setImageUri1)}
            nomeIcone="plus"
          />

          
         {/* DOC. OPCIONAIS */}

         <Header titulo="Documentos (Opcional)"/>

          <DadoUsuario valor="Imagem 1" temImagem={imageUri2}  icone={true} nomeIcone="plus" onPress={() => obterImagem(imageUri2,setImageUri2)}/>
          <DadoUsuario valor="Imagem 2" temImagem={imageUri3}  icone={true} nomeIcone="plus" onPress={() => obterImagem(imageUri3,setImageUri3)}/>
          <DadoUsuario valor="Imagem 3" temImagem={imageUri4}  icone={true} nomeIcone="plus" onPress={() => obterImagem(imageUri4,setImageUri4)}/>
          <DadoUsuario valor="Imagem 4" temImagem={imageUri5}  icone={true} nomeIcone="plus" onPress={() => obterImagem(imageUri5,setImageUri5)}/>
         
         <Header titulo='Adicionar Anexos (Opcional)'/>

          <DadoUsuario  valor="Anexar PDF" icone={true} tamIcone={30} nomeIcone="file-pdf-box"
            onPress={() => obterDoc()}
          />

              {/* Botão de ENVIAR */}
              {/* <TouchableOpacity onPress={() => Alert.alert("Enviando")}
               style={{
               backgroundColor: 'white',
               width: '100%', position: 'absolute', bottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '50%', height: 50, justifyContent: 'center'}}>
                       <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Enviar</Text>
                    </View>
              </TouchableOpacity> */}

              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button mode='outlined' color='blue'>Enviar</Button>
                <Button mode='outlined' style={{marginVertical: 20}} color='blue'>Pré-visualizar PDF</Button>
              </View>
           

      </SafeAreaView>
    )
}
export default MarcarLimpeza

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
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
    fontFamily: fonts.titulo
  }
})
