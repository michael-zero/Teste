import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import { useNavigation} from '@react-navigation/native';
import colors from '../config/colors'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import  Constants  from 'expo-constants';
import fonts from '../config/fonts';
const Header = ({titulo='Titulo', nomeTela,  ...outrasProps}) => {
    
    const navigation = useNavigation()

    return (
     <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>

          <Pressable onPress={() => navigation.goBack()} style={[styles.iconeVoltar]}>
             <MaterialCommunityIcons  name="arrow-left" size={24} color="white" />
          </Pressable >

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={[styles.texto]}>{titulo}</Text>  
            </View>
          
          
         { (titulo === 'Meus Veículos') && <Pressable onPress={() => navigation.navigate('Adicionar Veiculos')} style={styles.icon}>
            <Entypo name="plus" size={24} color="white"/>
          </Pressable>}
        </View>
        
     </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        backgroundColor: colors.fundoTeresinaDigital,
        // marginTop: Constants.statusBarHeight
    },
    texto: {
        fontSize: 18,
        color: 'white',
        // position: 'absolute',
        // left: '35%',
        fontFamily: fonts.titulo
    },
    icon: {
        flexDirection: 'row',
        position: 'absolute',
        width: 40,
        justifyContent: 'center',
        right: 10
    },
    iconeVoltar: {
        width: 40,
    }
})
