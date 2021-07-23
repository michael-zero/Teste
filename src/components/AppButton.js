import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export const AppButton = ({title, onPress, ContainerStyle, textStyle}) => (
    <TouchableOpacity style={[styles.button, ContainerStyle]} onPress={onPress}>
      <View>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
      </TouchableOpacity>
    )

export default AppButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4356FF',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        width: '70%',
        alignSelf: 'center',
        height: 50
      },
      text: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase'
      }
})