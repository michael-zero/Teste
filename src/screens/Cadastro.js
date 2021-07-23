import React from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import {TextInput, Button} from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'
import Header from '../components/Header'
const Cadastro = () => {

    // Referencias
    const cpfRef = React.useRef()


    const [telefone, setTelefone] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [nascimento, setNascimento] = React.useState('')
    const [endereco, setEndereco] = React.useState('')

    const verificaCpf = () => {
        // console.log(cpfRef.current.isValid())
        if(cpfRef.current.isValid()){
            const semMascara = cpfRef.current.getRawValue()

            Alert.alert("CPF válido", String(semMascara))
        }else{
            Alert.alert("ERRO","CPF inválido!!")
        }
    }

    return (
        <Screen>
        <Header titulo='Cadastro de Usuário'/>
        <View style={{height: '70%', justifyContent: 'space-around'}}>
           <TextInput
            style={{height: 50}}
            placeholder='Nome'
           />


            <TextInput
            style={{height: 50}}
            placeholder="Telefone"
            render={props =>
                <TextInputMask
                {...props}
                type='cel-phone'
                options={{
                    maskType: "BRL",
                    dddMask: " (99) ",
                    withDDD: true
                }}
                value={telefone}
                onChangeText={fone => setTelefone(fone)}
                />
            }
            />

           <TextInput
            style={{height: 50}}
           
            placeholder="CPF *"
            render={props =>
                <TextInputMask
                {...props}
                ref={cpfRef}
                type='cpf'
                value={cpf}
                onChangeText={cpf => setCpf(cpf)}
                />
            }
            />

            <TextInput
            style={{height: 50}}
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            keyboardType='email-address'
            />

            <TextInput
            style={{height: 50}}
            placeholder="Senha"
            onChangeText={senha => setSenha(senha)}
            secureTextEntry
            />

            <TextInput
            style={{height: 50}}
            placeholder="Nascimento"
            render={props =>
                <TextInputMask
                {...props}
                type='datetime'
                value={nascimento}
                onChangeText={nasc => setNascimento(nasc)}
                />
            }
            />

            <TextInput
            style={{height: 50}}
            placeholder="Endereço"
            onChangeText={endereco => setEndereco(endereco)}
            secureTextEntry
            />
          </View>
           

           <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Button onPress={verificaCpf} mode='outlined' color='blue'>Cadastrar</Button>
           </View>
           

        </Screen>
    )
}

export default Cadastro

const styles = StyleSheet.create({})
