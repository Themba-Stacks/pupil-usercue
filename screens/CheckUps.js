import React from 'react'
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'

export default function CheckUps({ navigation }) {
    var [count, setCount] = React.useState(8);
    return (
        <ScrollView style={{backgroundColor:"#EEF0F6"}}>
                <Image source={require('../assets/images/usercue2.png')} style={style.image}/>
                <Text style={style.textHead}>Everyday Check ups</Text>
                <Text style={style.textSmall}>Answer questionnaire, Green: healthy, Orange: mild symptom, Red: severe symptoms. If your score is lower than 2 you need to contact the nearest hospital</Text>
                <View>
                    <Text style={style.question}>Do you have a sore throat?</Text>
                    <View style={style.answer}>
                        <Text style={{...style.textAnswer,backgroundColor:'#00D782'}}>Green</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#FF812C'}} onPress={() => setCount(c => c - 1)} >Orange</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#F05454'}} onPress={() => setCount(c => c - 2.3)}>Red</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.question}>Do you have a sudden cough?</Text>
                    <View style={style.answer}>
                        <Text style={{...style.textAnswer,backgroundColor:'#00D782'}}>Green</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#FF812C'}} onPress={() => setCount(c => c - 1)} >Orange</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#F05454'}} onPress={() => setCount(c => c - 2.3)}>Red</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.question}>Do you have prexial fever?</Text>
                    <View style={style.answer}>
                        <Text style={{...style.textAnswer,backgroundColor:'#00D782'}}>Green</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#FF812C'}} onPress={() => setCount(c => c - 1)} >Orange</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#F05454'}} onPress={() => setCount(c => c - 2.3)}>Red</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.question}>Do you feel weakness/fetigue?</Text>
                    <View style={style.answer}>
                        <Text style={{...style.textAnswer,backgroundColor:'#00D782'}}>Green</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#FF812C'}} onPress={() => setCount(c => c - 1)} >Orange</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#F05454'}} onPress={() => setCount(c => c - 2.3)}>Red</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.question}>Do you have redness of eye?</Text>
                    <View style={style.answer}>
                        <Text style={{...style.textAnswer,backgroundColor:'#00D782'}}>Green</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#FF812C'}} onPress={() => setCount(c => c - 1)} >Orange</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#F05454'}} onPress={() => setCount(c => c - 2.3)}>Red</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.question}>Do you have chest pains?</Text>
                    <View style={style.answer}>
                        <Text style={{...style.textAnswer,backgroundColor:'#00D782'}}>Green</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#FF812C'}} onPress={() => setCount(c => c - 1)} >Orange</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#F05454'}} onPress={() => setCount(c => c - 2.3)}>Red</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.question}>Have you been in contact with someone known to have COVID 19?</Text>
                    <View style={style.answer}>
                        <Text style={{...style.textAnswer,backgroundColor:'#00D782'}}>Green</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#FF812C'}} onPress={() => setCount(c => c - 1)} >Orange</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#F05454'}} onPress={() => setCount(c => c - 2.3)}>Red</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.question}>Do you live with someone with COVID 19 or flu like symptoms?</Text>
                    <View style={style.answer}>
                        <Text style={{...style.textAnswer,backgroundColor:'#00D782'}}>Green</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#FF812C'}} onPress={() => setCount(c => c - 1)} >Orange</Text>
                        <Text style={{...style.textAnswer,backgroundColor:'#F05454'}} onPress={() => setCount(c => c - 2.3)}>Red</Text>
                    </View>
                </View>
                <Text 
                    onPress={()=> navigation.navigate('Home')}
                    style={{...style.question,marginBottom:10,backgroundColor:"#06CAFD"}}>Submit
                </Text>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    image: {flex:1,
        margin:20,
        marginHorizontal:10,
        alignSelf:"center",
        width:"70%",
        height:250,
        top:50,
    },
    textHead: {
        flex:1,
        alignSelf:"center",
        fontFamily: "Poppins-Bold",
        fontSize:18,
    },
    textSmall: {
        flex:1,
        textAlign:'center',
        alignSelf:"center",
        fontFamily: "Poppins-Regular",
        fontSize:14,
        marginVertical:25,
    },
    textAnswer: {
        flex:1,
        alignSelf:"center",
        fontFamily: "Poppins-Regular",
        fontSize:14,
        paddingVertical:10,
        paddingLeft:10,
        borderRadius:21,
        justifyContent:'center',
        marginLeft:10,
    },
    question: {
        flex:1,
        paddingHorizontal:80,
        backgroundColor:"#EEF0F6",
        borderRadius:20,
        marginTop:20,
        alignSelf:'center',
        paddingVertical:14,
        fontSize: 18,
        lineHeight: 27,
        elevation: 7,
        shadowColor: '#FFFFFF'
    },
    answer:{
        flex:1,
        flexDirection:'row',
        marginHorizontal:20,
        marginBottom:30,
    }
})
