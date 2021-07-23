 import React from 'react'
 import { StyleSheet, Text, View, Pressable } from 'react-native'
 
 import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import colors from '../config/colors';
import fonts from '../config/fonts';



 const BtnMapa = ({location, setRegiao, buscarUnidade, navigation, unidades}) => {


     return (
        <View style={styles.containerBtns}>
            {/* Minha localizacao */}
            <View>
                 
                 <Pressable onPressIn={() => {
                     setRegiao({latitude: Number(location.latitude),longitude:  Number(location.longitude), latitudeDelta: 0.014, longitudeDelta: 0.014})}}>
                 <View style={styles.btnMinhaLocalizacao}> 
                    <FontAwesome name="location-arrow" size={26} color="white" />
                 </View>
                 </Pressable>
                
             </View>


             {/* Unidade mais proxima */}
             <View>
                 <Pressable onPress={() => buscarUnidade()}>
                     <View style={styles.btnUniProxima}>
                         <Text style={styles.txtUniProxima}>Unidade mais proxima</Text> 
                     </View>
                 </Pressable>
                
             </View>
                
                {/* Btn listar */}
              
                <View style={styles.btnListar}>
                    <Ionicons onPress={() => { 
                        navigation.navigate("Unidades", {datas: unidades, location: location})}} name="list-circle" size={52} color={colors.fundoTeresinaDigital} />
                </View>

              
            </View>
     )
 }
 
 export default BtnMapa
 
 const styles = StyleSheet.create({
    containerBtns:{
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    btnMinhaLocalizacao:{
        width: 45, 
        height: 45, 
        backgroundColor: colors.fundoTeresinaDigital, 
        marginLeft: 5,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnUniProxima:{
        backgroundColor: colors.fundoTeresinaDigital,
        height: 40, 
        width: 180, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    txtUniProxima: {
        color: 'white',
        fontFamily: fonts.titulo
    },
    btnListar: {
       alignSelf: 'flex-end',
       paddingRight: 5,
    }

 })
 