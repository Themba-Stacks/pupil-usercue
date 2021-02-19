import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({ navigation }) {
    return (
        <Onboarding
        onSkip={ () => navigation.navigate("Home")}
        onDone={ () => navigation.navigate("Home")}
        transitionAnimationDuration={500}
        imageContainerStyles={{paddingBottom:0, flex:1, justifyContent:"flex-start", alignItems:"center"}}
  pages={[
    {
      backgroundColor: "#EEF0F6",
      image: <Image source={require('../assets/images/wearamask1.png')} style={style.container} />,
      title: '',
      subtitle: '',
    },
    {
        backgroundColor: "#EEF0F6",
        image: <Image source={require('../assets/images/Washands2.png')} style={style.container} />,
        title: '',
        subtitle: '',
      },
      {
        backgroundColor: "#EEF0F6",
        image: <Image source={require('../assets/images/socialDistancing3.png')} style={style.container} />,
        title: '',
        subtitle: '',
      },
    
  ]}
/>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:390

    }
})
