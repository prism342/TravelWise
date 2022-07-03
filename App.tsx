import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelocomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome Screen"
          options={{headerShown: false}}
          component={WelocomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  PageHeader: {
    flex: 1,
  },
  PageBody: {
    flex: 2,
  },
  pageFooter: {
    flex: 1,
  },
});
