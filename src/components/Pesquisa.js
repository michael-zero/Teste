import React from 'react'
import { StyleSheet, Text, TextInput, View, Animated, TouchableWithoutFeedback } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Pesquisa = ({pesquisar, container, place='Buscar Unidade'}) => {

    const inputRef = React.useRef(null)

    return (
        <View style={styles.container}>
           <View style={[styles.containerInput, {...container}]}>
                <FontAwesome name="search" size={24} color="black" style={{marginLeft: 5}} />
                <TextInput ref={inputRef} onChangeText={unidade => {
                    pesquisar(unidade)
                }}
                 style={styles.input} placeholder={place}/>
            </View>
        </View>
    )
}

export default Pesquisa

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignSelf: 'flex-start',
        marginHorizontal: 10,
    },
    containerInput:{
        flex: 1,
        height: 50, 
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 10,
        borderWidth:1,
        borderColor: "#D3E2E5"


    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
        
    }
})
