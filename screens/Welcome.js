import React from 'react'
import { Text, View, Image } from 'react-native'

export default class Welcome extends React.Component{

    render(){
        const { navigate } = this.props.navigation
        return (
            <View style={{backgroundColor:"#EEF0F6", height:"100%"}}>
                <Image source={require('../assets/images/masklogo.png')} 
                    style={{width:"70%", height:"30%", top:200, left:60 }}
                />
                <Text
                    style={{ position: 'absolute', left: '16.43%', right: '16.18%', top: '51.56%', bottom: '45.09%', fontSize:18, fontFamily:"Poppins-Regular"}}
                >Welcome, Lets get you started</Text>

                <Text 
                onPress={()=>navigate('Login')}
                style={{
                    fontFamily: "Poppins-Regular",
                    position:"absolute",
                    left:"6.76%",
                    right:"7.49%",
                    top:"61.49%",
                    bottom:"33.04%",
                    backgroundColor:"#06CAFD",
                    borderRadius:7,
                    textAlign: 'center',
                    paddingTop: 10,
                    fontSize: 15,
                    lineHeight: 21,
                    elevation: 7,
                    shadowColor: '#FFFFFF'
                }}>Log In</Text>
                <Text 
                onPress={()=>navigate('Register')}
                style={{
                    fontFamily: "Poppins-Regular",
                    position:"absolute",
                    left:"6.76%",
                    right:"7.49%",
                    top:"74.5%",
                    bottom:"20.12%",
                    backgroundColor:"#06CAFD",
                    borderRadius:7,
                    textAlign: 'center',
                    paddingTop: 12,
                    fontSize: 14,
                    lineHeight: 21,
                    elevation: 7,
                    shadowColor: '#FFFFFF'
                }}>Sign Up</Text>
            </View>
        )
    }
}