import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../styles/colors';

import PlantSelection from '../pages/PlantSelection';
import MyPlants from '../pages/MyPlants';

const Tabs = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tabs.Navigator tabBarOptions={{ 
        activeTintColor: colors.green, 
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
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