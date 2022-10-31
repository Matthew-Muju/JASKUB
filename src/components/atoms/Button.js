import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, color='#2196F3', textColor = '#FFFFFF', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: color => ({
        height: 45,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    }),
    text: textColor => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: textColor,
    })
})