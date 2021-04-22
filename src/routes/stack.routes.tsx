import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from '../pages/Welcome';
import UserIdentificationPage from '../pages/UserIdentification';
import ConfirmationPage from '../pages/Confirmation';
import PlantSavePage from '../pages/PlantSave';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="UserIdentification" component={UserIdentificationPage} />
      <Stack.Screen name="Confirmation" component={ConfirmationPage} />
      <Stack.Screen name="PlantSelection" component={TabRoutes} />
      <Stack.Screen name="PlantSave" component={PlantSavePage} />
      <Stack.Screen name="MyPlants" component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default StackRoutes;