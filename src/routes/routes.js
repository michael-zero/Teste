import React from 'react';


// Componentes 
import DrawerContent from '../components/DrawerContent'

//Importando Contexto 
import {DadosContext} from '../DadosContext'

// Importando navegação
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'


//Telas
import LoginTela from '../screens/Login'
import Perfil from '../screens/Perfil';

import CadastroTela from '../screens/Cadastro'
import InicioTela from '../screens/Inicio'
import ProcessosTela from '../screens/Processos'
import Unidades from '../screens/Unidades'
import MarcarLimpeza from '../screens/MarcarLimpeza';
import DadosLimpeza from '../screens/DadosLimpeza'
import ColetaDomiciliar from '../screens/ColetaDomiciliar';
import Veiculos from '../screens/Veiculos/Veiculos';
import Infracoes from '../screens/Veiculos/Infracoes';

import AddVeiculo from '../screens/Veiculos/AddVeiculo'
import EditarVeiculo from '../screens/Veiculos/EditarVeiculo';


import AlterarBairro from '../screens/PerfilUsuario/AlterarBairro'
import AlterarEndereco from '../screens/PerfilUsuario/AlterarEndereco'
import AlterarNascimento from '../screens/PerfilUsuario/AlterarNascimento'
import AlterarRG from '../screens/PerfilUsuario/AlterarRG'
import AlterarTelefone from '../screens/PerfilUsuario/AlterarTelefone'
import AlterarNome from '../screens/PerfilUsuario/AlterarNome'


const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Login = createStackNavigator()
const StackVeiculos = createStackNavigator()
const StackPerfilUsuario  = createStackNavigator()


  // Navegadores 
  const LoginScreen = () => (
    <Login.Navigator headerMode='none'>
      <Login.Screen name='Entrar' component={LoginTela}  options={{headerShown: false}}/>
      <Login.Screen name='Cadastro' component={CadastroTela} options={{title: 'Cadastro'}}/>
    </Login.Navigator>
    
  )

  const StackScreen = () => (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Seus Processos' component={ProcessosTela}/>
    </Stack.Navigator>
  )

  const StackVeiculosScreen = () => (
    // screenOptions={{header: () => <Header titulo='Meus Veículos'/>, animationEnabled: false}}
    <StackVeiculos.Navigator headerMode='none'>
      <StackVeiculos.Screen name='Meus Veiculos' component={Veiculos}/>
      <StackVeiculos.Screen name='Adicionar Veiculos' component={AddVeiculo}/>
      <StackVeiculos.Screen name='Editar Veiculo' component={EditarVeiculo}/>
      {/* <StackVeiculos.Screen name='Atualizar Modelo' component={AtualizarModelo}/>
      <StackVeiculos.Screen name='Atualizar Marca' component={AtualizarMarca}/>
      <StackVeiculos.Screen name='Atualizar Ano' component={AtualizarAno}/>
      <StackVeiculos.Screen name='Atualizar Cor' component={AtualizarCor}/>
      <StackVeiculos.Screen name='Atualizar Placa' component={AtualizarPlaca}/>
      <StackVeiculos.Screen name='Atualizar Renavam' component={AtualizarRenavam}/> */}
    </StackVeiculos.Navigator>
  )

  const StackPerfilScreen = () => (
    <StackPerfilUsuario.Navigator headerMode='none' initialRouteName='Perfil'>
      
      <StackPerfilUsuario.Screen name='Perfil' component={Perfil}/>
      <StackPerfilUsuario.Screen name='Alterar Bairro' component={AlterarBairro}/>
      <StackPerfilUsuario.Screen name='Alterar Endereco' component={AlterarEndereco}/>
      <StackPerfilUsuario.Screen name='Alterar Nascimento' component={AlterarNascimento}/>
      <StackPerfilUsuario.Screen name='Alterar RG' component={AlterarRG}/>
      <StackPerfilUsuario.Screen name='Alterar Telefone' component={AlterarTelefone}/>
      <StackPerfilUsuario.Screen name='Alterar Nome' component={AlterarNome}/>
    </StackPerfilUsuario.Navigator>
  )
  

  const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName='Início'
     drawerContent={(props) => <DrawerContent {...props}/>}
    >
          <Drawer.Screen name="Início" component={InicioTela} />
          <Drawer.Screen name="Unidades" component={Unidades}/>
          <Drawer.Screen name="Processos" component={StackScreen}/>
          <Drawer.Screen name="SolicitarLimpeza" component={MarcarLimpeza}/>
          <Drawer.Screen name="DadosLimpeza" component={DadosLimpeza}/>
          <Drawer.Screen name="Login" component={LoginScreen}/>
          <Drawer.Screen name="Coleta" component={ColetaDomiciliar}/>

          <Drawer.Screen name="Veiculos" component={StackVeiculosScreen}/>
          <Drawer.Screen name="Infracoes" component={Infracoes}/>
          <Drawer.Screen name="Perfil" component={StackPerfilScreen}/>

    </Drawer.Navigator>
  )
  // Fim dos Navegadores 

  export default DrawerScreen