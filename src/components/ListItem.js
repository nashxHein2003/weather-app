import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import  { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = (props) => {
  const { condition, dt_txt, min, max } = props;

  const {item, temp, date} = styles;
  return (
    <View style={item}>

      <Feather name={weatherType[condition]?.icon} size={70} color={'rgba(0, 0, 0, 0.6)'}  />
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°~ ${Math.round(max)}°`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  temp: {
    color: 'black',
    fontSize: 20
  },
  date: {
    color: 'black',
    fontSize: 20,
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})

export default ListItem