import React from 'react'
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#EEF0F6", height:"100%"}}>
                <Image source={require('../assets/images/usercue2.png')} 
                    style={{width:"70%", height:"30%", top:90, left:60 }}
                />
            <View style={style.login}>
                <Text style={style.text}>Log In</Text>
                <View style={{...style.loginItems2,"top":"42%"}}>
                    <Icon name="mail" color="#0C0D3B" size={24} style={{...style.icons,}} />
                    <TextInput  placeholder="Email" style={{paddingHorizontal:32}} />                  
                </View>

                <View style={{...style.loginItems2,"top":"65%"}}>
                <Ionicons name="key-outline" size={24} color="#0C0D3B" style={style.icons}/>
                    <TextInput secureTextEntry placeholder="Password" style={{paddingHorizontal:32}} />                  
                </View>
            </View>
            <Text 
                onPress={()=>navigate('Welcome')}
                style={{...style.button,top:"80.49%",}}>Log In</Text>
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