import { View, Text, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {

  const {
    wrapper,
    container,
    tempStyles,
    highLow,
    highLowWrapper,
    description,
    message,
    widget,
    currentWidget,
    descriptionWidget,
    rowLayout,
    rowView,
    rowText
   } = styles

   const { 
    main: { 
      temp, 
      temp_max, 
      temp_min,
      humidity,
       }, weather, wind} = weatherData

   const weatherCondition = weather[0]?.main
  return (

    <SafeAreaView style={wrapper}>
      <StatusBar
        barStyle='dark-content'
      />

        <Image
        style={styles.bgImage}
          source={{
            uri: weatherType[weatherCondition]?.backgroundColor
          }}
        />

      <View style={container}>
        <View style={[widget, currentWidget]}>
          <Feather 
            name={weatherType[weatherCondition]?.icon} size={150} 
            color="white" />
              
          <Text style={tempStyles}>{`${temp}°`}</Text>

          <RowText
            messageOne={`High: ${temp_max}° `}
            messageTwo={`Low: ${temp_min}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow} />

            <View style={rowLayout}>
              <View style={rowView}>
              <Feather name='wind' size={30} color='white' />
              <Text style={rowText}>{wind.speed}</Text>
              </View>
              <View style={rowView}>
              <Feather name='droplet' size={30} color='white' />
              <Text style={rowText}>{humidity}</Text>
              </View>
            </View>
            
        </View>

          <RowText
            messageOne={weather[0]?.description}
            messageTwo={weatherType[weatherCondition]?.message}
            containerStyles={[descriptionWidget, widget]}
            messageOneStyles={description}
            messageTwoStyles={message}
          />
      
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    
  },
  tempStyles: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50
  },
  highLow: {
    color: 'black',
    fontSize: 20,
    fontWeight: 500,
    color: 'white'
  },
  highLowWrapper: {
    flexDirection: 'column'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 35,
    marginBottom: 40
  },
  description: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 400
  },
  message: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 500
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1
  },
  currentWidget: {
    paddingVertical: 60,
  },
  descriptionWidget: {
    paddingVertical: 20,
  },
  widget: {
    width: 350,
    backgroundColor: 'rgba(59, 59, 59 , 0.7)',
    borderRadius: 25,
    alignItems: 'center'
  },
  rowLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowText: {
    color: 'white',
    fontWeight: 'normal',
    marginLeft: 5
  }
})

export default CurrentWeather