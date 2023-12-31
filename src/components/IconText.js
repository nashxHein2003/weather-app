import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { 
    iconName, 
    iconColor, 
    bodyText, 
    bodyTextStyles 
  } = props

  const {
    container,
    textTheme,
   } = styles
   
  return (
    <View style= {container}>
      <Feather name={iconName} size={30} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center'
  },
  textTheme: {
    fontWeight: 'normal'
  }
})

export default IconText