import React from 'react'
import { StyleSheet, View, Pressable, KeyboardAvoidingView, Image, Alert} from 'react-native'

import { DadosContext } from '../DadosContext'
import constants from 'expo-constants'

import {Button} from 'react-native-paper'
import { TextInput, Text } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../config'

export default function Login({navigation}) {

    const {setLogado, logado} = React.useContext(DadosContext);
    const [email, setEmail] = React.useState("mlmbufpi@gmail.com")
    const [senha, setSenha] = React.useState("michael123")
   
    const refInputCpf = React.useRef()

    const [error, setError] = React.useState({campo: null, msg: null})
    const [btnHabilitado,] = React.useState(true)
    const [senhaNaoVisivel, setSenhaNaoVisivel] = React.useState(true)


    // Evento ao sair da tela
    React.useEffect(() => navigation.addListener('blur', (e) => {
        setError({campo: null, msg: null})
        setEmail(null)
        setSenha(null)
    })
    ,[])


    const storeToken = async (user) => {
        try {
           await AsyncStorage.setItem("@tdigital-usuario", JSON.stringify(user));
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }

      const getToken = async (user) => {
        try {
          let userData = await AsyncStorage.getItem("@tdigital-usuario");
          let data = JSON.parse(userData);
          console.log(data);
        } catch (error) {
          console.log("Algo deu errado", error);
        }
      }

    const login = async (email, senha) => {
        try {
              const {user} = await auth.signInWithEmailAndPassword(email, senha)

               if(user){
                   setLogado(true)
                   navigation.navigate('Início')
                   storeToken(user)
               }
        } catch (error) {
           if(error.message === 'signInWithEmailAndPassword failed: Second argument "password" must be a valid string.'){
            //    Alert.alert("Erro","Campo senha obrigatório!")
               setError({campo: 'senha', msg: "Campo senha obrigatório!"})
           }else if(error.message === 'The password is invalid or the user does not have a password.'){
            //   Alert.alert("Erro","Senha inválida ou usuário não digitou uma senha")
              setError({campo: 'senha', msg: "Senha inválida ou usuário não digitou uma senha."})
           }else if(error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.'){
            //    Alert.alert("Erro", "Usuário não identificado!")
               setError({campo: 'email', msg: "Usuário não identificado!"})
           }else if(error.message === 'The email address is badly formatted.'){
                // Alert.alert("Erro", "Email no formato incorreto!")
                setError({campo: 'email', msg: "Erro no formato do email. ex: johndoe@gmail.com"})    
           }else if(error.message === 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'){
                setError({campo: 'senha', msg: "Bloqueado! Você tentou várias vezes, resete sua senha."})
           }
           else{
            console.log(error.message)
            Alert.alert("Erro", "Erro no aplicativo. Entre em contato com o Prodater")
           }
          
        }
     }
 


    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior='height'>
         
         <View style={{flex:1, marginTop: constants.statusBarHeight + 10, justifyContent: 'space-between'}} >

                <View style={{ height: '40%', justifyContent: 'center'}}>
                {/* IMAGEM */}
                    <View style={styles.img}>
                        <Image source={require('../imagens/logo.png')} style={{resizeMode: 'contain', width: 170, height: 160}}/>
                    </View>

                </View>

                    <View style={styles.entrada}>            
                        <TextInput
                        value={email}
                        autoCapitalize="none"
                        style={{height: 50, paddingHorizontal: 20}}
                        keyboardType='email-address'
                        placeholder="E-mail *"
                        onChangeText={email => setEmail(email)}
                        />

                        {(error.campo === 'email') && <Text style={styles.error}>{error.msg}</Text>}
                        
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                            value={senha}
                            autoCapitalize="none"
                            style={{height: 50,paddingHorizontal: 20, width: '100%'}}
                            placeholder="Senha"
                            onChangeText={senha => setSenha(senha)}
                            secureTextEntry={senhaNaoVisivel}
                            />

                       { (senha !== null && senha !== '') && <Pressable onPress={() => setSenhaNaoVisivel(prev => !prev)} style={{position: 'absolute', right: 10, alignSelf: 'center'}}>
                            
                             { senhaNaoVisivel ? <MaterialCommunityIcons name="eye-outline" size={24} color="black" /> 
                             :
                             <MaterialCommunityIcons name="eye-off-outline" size={24} color="black" />}
                            
                        </Pressable>}


                        </View>
                        {(error.campo === 'senha') && <Text style={styles.error}>{error.msg}</Text>}

                    </View>

                
                <View style={styles.Containerbtns}>
                    <Button 
                    testID='loginButton'
                    onPress={() => login(email,senha)} 
                    disabled={(!email || !senha) ? btnHabilitado : !btnHabilitado}
                    color='blue' mode='outlined'>Entrar</Button>
                    

                    {/* Botão de cadastro */}
                    <View style={styles.caixa}>

                        <Button color='blue' labelStyle={{fontSize: 12}} onPress={() => {
                            navigation.navigate('Cadastro')}}>
                            Cadastro
                        </Button>
                        <Button  color='blue' labelStyle={{fontSize: 12}}  onPress={() => {
                            navigation.navigate('Cadastro')}}>
                            Esqueci a senha
                        </Button>
                        

                       

                    </View>

                </View>  
                {/* Fim do btn */}
         </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
   caixa: {
       justifyContent: 'space-between',
       alignItems: 'center',
       flexDirection: 'row',
       paddingHorizontal: 40
   },
   fundo:{
    flex: 1,
    marginTop: constants.statusBarHeight
   },
   entrada: {
       marginBottom: 30, 
       height: 150,
       justifyContent: 'space-around',
       marginTop: -30,
   },
   input: {
    height: 40,
    borderRadius: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    backgroundColor: '#C4C4C4',
    width: '95%',
    alignSelf: 'center',
},
   img:{
    //    borderWidth: 2, 
    //    borderColor: colors.fundoTeresinaDigital,
       alignItems: 'center',
       marginBottom: 30,
       width: 170,
       height: 170,
    //    paddingVertical: 5,
    //    borderRadius: 90,
       alignSelf: 'center',
     
    },
    Containerbtns: {
    
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    error: {
        marginHorizontal: 20,
        color: 'red',
        fontSize: 12
    }
})
