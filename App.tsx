import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notification from 'expo-notifications';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

import Routes from './src/routes';
import { Plant } from './src/libs/storage';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Jost-400': Jost_400Regular,
    'Jost-600': Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notification.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as Plant;

        console.log(data);
    });

    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
};

export default App;