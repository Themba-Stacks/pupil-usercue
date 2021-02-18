import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './navigations/Navigator'
import * as Font from 'expo-font'
import  AppLoading  from 'expo-app-loading'
import * as Location from 'expo-location'

export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Poppins-Regular' : require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold' : require('./assets/fonts/Poppins-Bold.ttf')
    });
    this.setState({isFontLoaded:true})
  }

  render(){
  return (
    (this.state.isFontLoaded === true) ? (< AppNavigator />) : (AppLoading)   
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
