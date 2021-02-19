import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
        <View style={{backgroundColor:"#EEF0F6", height:"100%"}}>
            <View style={style.header}>
                <Text><Ionicons name="menu" size={34} color="black" /></Text>
                <Text>Hi User<MaterialCommunityIcons name="face-profile" size={44} color="black" /></Text>
                </View>
            <Text 
                onPress={()=> navigation.navigate('Updates')}
                style={{...style.button,top:"23.66%"}}>Covid-19 Updates</Text>
                <Text 
                onPress={()=> navigation.navigate('CheckUps')}
                style={{...style.button,top:"35.27%"}}>Everyday Check Ups</Text>
                <Text 
                onPress={()=> navigation.navigate('GHotspots')}
                style={{...style.button,top:"46.88%"}}>Global Hotspots</Text>
                <Text 
                onPress={()=> navigation.navigate('LHotspots')}
                style={{...style.button,top:"58.48%"}}>Hotspots Near Me</Text>
                <Text 
                onPress={()=> navigation.navigate('Exterminators')}
                style={{...style.button,top:"70.09%"}}>Hire Exterminators</Text>
                <Text 
                onPress={()=> navigation.navigate('Movements')}
                style={{...style.button,top:"81.7%"}}>Diagnoses & Movements</Text>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        fontFamily: "Poppins-Bold",
                    position:"absolute",
                    left:"6.76%",
                    right:"7.49%",
                    backgroundColor:"#06CAFD",
                    borderRadius:20,
                    textAlign: 'center',
                    paddingVertical:16,
                    fontSize: 18,
                    lineHeight: 27,
                    elevation: 7,
                    shadowColor: '#FFFFFF'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: "20.83%",
        paddingHorizontal:45
    }
})