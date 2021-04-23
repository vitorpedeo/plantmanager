import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import PlantSelection from '../pages/PlantSelection';
import MyPlants from '../pages/MyPlants';

const Tabs = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tabs.Navigator tabBarOptions={{ 
        activeTintColor: colors.green, 
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        labelStyle: {
          fontFamily: fonts.text,
        },
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 60,
        }
      }}
    >
      <Tabs.Screen 
        name="Nova Planta" 
        component={PlantSelection} 
        options={{
          tabBarIcon: ({ size, color}) => (
            <MaterialIcons name="add-circle-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen 
        name="Minhas Plantas" 
        component={MyPlants} 
        options={{
          tabBarIcon: ({ size, color}) => (
            <MaterialIcons name="format-list-bulleted" size={size} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabRoutes;