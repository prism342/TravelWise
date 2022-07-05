import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

import DetailsScreen from './screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function AppStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStacks />
    </NavigationContainer>
  );
}
