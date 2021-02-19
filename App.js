import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  { useFonts } from 'expo-font';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import Welcome from './screens/Welcome';
import Register from './screens/Register'
import Login from './screens/Login'
import Home from './screens/Home';
import OnboardingScreen from './screens/OnboardingScreen';
import Updates from './screens/Updates';
import CheckUps from './screens/CheckUps';
import GHotspots from './screens/GHotspots';
import LHotspots from './screens/LHotspots';
import Exterminators from './screens/Exterminators';
import Movements from './screens/Movements';

const Stack = createStackNavigator();


export default function App () {

  let [fontsLoaded] = useFonts({
      'Poppins-Regular' : require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold' : require('./assets/fonts/Poppins-Bold.ttf')
    });

  if (!fontsLoaded){
    return < AppLoading />
  } else {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} options={{title: 'Sign Up'}}/>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Updates" component={Updates} />
        <Stack.Screen name="CheckUps" component={CheckUps} />
        <Stack.Screen name="GHotspots" component={GHotspots} />
        <Stack.Screen name="LHotspots" component={LHotspots} />
        <Stack.Screen name="Exterminators" component={Exterminators} />
        <Stack.Screen name="Movements" component={Movements} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
