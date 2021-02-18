import React from 'react'
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

export default class Register extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#EEF0F6", height:"100%"}}>
                <Image source={require('../assets/images/usercue2.png')} 
                    style={{width:"70%", height:"30%", top:90, left:60 }}
                />
            <View style={style.login}>
                <Text style={style.text}>Sign Up</Text>
                <View style={{...style.loginItems2,"top":"29%"}}>
                    <TextInput placeholder="Name" placeholderTextColor="#95A0B8" style={{paddingHorizontal:0}} />                  
                </View>
                <View style={{...style.loginItems2,"top":"45%"}}>
                    <TextInput placeholder="Email" placeholderTextColor="#95A0B8" style={{paddingHorizontal:0}} />                  
                </View>
                <View style={{...style.loginItems2,"top":"60%"}}>
                    <TextInput secureTextEntry placeholder="Password" placeholderTextColor="#95A0B8" style={{paddingHorizontal:0}} />                  
                </View>
                <View style={{...style.loginItems2,"top":"75%"}}>
                    <TextInput secureTextEntry placeholder="Confirm Password" placeholderTextColor="#95A0B8" style={{paddingHorizontal:0}} />                  
                </View>
            </View>
            <Text 
                onPress={()=>navigate('Welcome')}
                style={{...style.button,top:"80.49%",}}>Sign Up</Text>
        </View>               
    )
}
}

const style = StyleSheet.create({
    login: {
        "position":"absolute",
        "left":"6.76%",
        "right":"7.49%",
        "top":"43.37%",
    "bottom":"25.06%",
    "backgroundColor":"#EEF0F6",
    // "boxShadow":"4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)",
    elevation: 7,
    shadowColor: '#FFFFFF',
    "borderRadius":19
    },
    icons: {
        "position":"absolute",
        "left":"1.33%",
        "right":"11.54%",
        "top":"-2.58%",
    },
    loginItems2: {
        "position":"absolute",
        "left":"15.1%",
        "right":"17.63%",
        borderBottomWidth:1,
        borderBottomColor: "#0C0D3B"
    },
    text: {
        "left":'15.1%',
        "top":'4.62%',
        fontSize: 30,
        fontFamily: 'Poppins-Bold'
    },
    button: {
        fontFamily: "Poppins-Regular",
                    position:"absolute",
                    left:"6.76%",
                    right:"7.49%",
                    backgroundColor:"#06CAFD",
                    borderRadius:7,
                    textAlign: 'center',
                    paddingTop: 10,
                    paddingBottom:10,
                    fontSize: 15,
                    lineHeight: 21,
                    elevation: 7,
                    shadowColor: '#FFFFFF'
    }
})