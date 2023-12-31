import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
  const { 
    container,
    imageLayout,
    rowLayout,
    cityName, 
    cityText, 
    countryName, 
    populationWrapper, 
    populationText, 
    riseSetWrapper, 
    riseSetText,
    widget,
    wrapper
  } = styles

  const { name, country, population, sunrise, sunset} = weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground
      source={require('../../assets/city-background.jpg')}
      style={imageLayout}>
        <View style={widget}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout, wrapper]}>
            <IconText 
            iconName={'user'} 
            iconColor={'red'} 
            bodyText={`Population : ${population}`}
            bodyTextStyles={populationText} />
          </View>
          
          <View style={[riseSetWrapper, rowLayout, wrapper]}>
            <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText} />
            
            <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  cityName: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'normal'
  },
  countryName: {
    fontSize: 20,
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 330,
    paddingVertical: 10,
    borderRadius: 10
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 15,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems:'center'
  },
  widget: {
    width: 350,
    backgroundColor: 'rgba(59, 59, 59 , 0.8)',
    paddingVertical: 50,
    alignItems: 'center',
    borderRadius: 25
  }
})

export default City