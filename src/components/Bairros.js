import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Pesquisa from '../components/Pesquisa'
import ListarBairros from './ListarBairros';
import BAIRROS from '../../api/bairros.json'

const Bairros = ({modal, setModalVisible, checked, setChecked}) => {
 
    const [bairros, setarBairros] = React.useState(0)

    React.useEffect(() => {
        setarBairros(BAIRROS)
    }, [])

    
    


    return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
           >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView]}>
                  
                  {/* Container pesquisa e close */}
                    {/* <View style={{flexDirection: 'row',justifyContent: 'space-between', width: '100%',
                        alignItems: 'center'}}>
                        <Pesquisa container={{width: 300}} place='Bairro'/>
                       
                        <TouchableOpacity
                        style={{flexDirection: 'row', alignSelf: 'flex-end', right: 20, top: -5}}
                        onPress={() => {
                            setModalVisible(!modal);
                        }}>
                
                            <MaterialCommunityIcons style={styles.modalClose} name="close-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View> */}

                    {/* Bairros */}
                    <View style={{flex: 1, width: '100%', marginTop: 10, paddingHorizontal: 10}}>
                        <ListarBairros checked={checked} setChecked={setChecked} bairros={bairros} modal={modal}
                        setModalVisible={setModalVisible}/>
                    </View>
                    {/* FIm dos bairros */}

                    </View>
                </View>
            </Modal>
    )
}

export default Bairros

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      },
      modalView: {
        width: '95%',
        height: '95%',
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
})
