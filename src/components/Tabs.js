import React from 'react';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return(
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: '#3B3B3B',
          tabBarStyle: {
            backgroundColor: 'white'
          },
          headerTitleStyle: {
            fontSize: 25,
            color: 'black',
            title: 'Aligned Center',
            headerTitleAlign: 'center'
          },
        }}>
          <Tab.Screen 
            name={'CURRENT WEATHER'}
            options={{
              tabBarIcon: ({ focused }) => (
              <Feather 
                name={'droplet'}
                size={30} 
                color={focused? 'tomato' : '#3B3B3B'}
                />
              )
            }} 
          >
            {() => <CurrentWeather weatherData= {weather.list[0]}  />}
            </Tab.Screen>
          <Tab.Screen 
          name={'UPCOMING WEATHER'} 
          options={{
            tabBarIcon: ({  focused }) => (
              <Feather 
                name={'clock'}
                size={30}
                color={focused? 'tomato' : '#3B3B3B'} 
                />
              )
          }}>
            {() => <UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>
          <Tab.Screen 
          name={'CITY'} 
          options={{
            tabBarIcon: ({  focused }) => (
              <Feather 
                name={'home'}
                size={30}
                color={focused? 'tomato' : '#3B3B3B'} 
                />
              )
          }}>
            {() => <City weatherData={weather.city} />}
            </Tab.Screen>
      </Tab.Navigator>
  );
}

export default Tabs