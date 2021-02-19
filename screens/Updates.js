import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { render } from 'react-dom';

export default function Updates() {

    return (
       
            <ScrollView style={styles.scrollView}>
                <Text style={{...styles.text,fontSize:20,marginLeft:34}}>A man at protest</Text>
            <Image source={require('../assets/images/manarrested.jpg')} style={styles.images}/>
                <Text style={styles.text}>
                    A man at a protest against the national lockdown was arrested on Saturday after allegedly pulling off a television journalist's face mask at the beach in Fish Hoek.
                    The man, who was not wearing a mask when he was taken into custody, was put in the back of a police van after the alleged incident involving eNCA reporter Monique Mortlock.
                    eNCA reported that some of the same protesters had attended a demonstration at Muizenberg beach last week, calling for the reopening of beaches.
                    Mortlock said the man, whom the broadcaster wanted to interview, complained about not being able to hear what she was saying because of her face mask.
                    “He then said he can't speak to people who wear masks ... He then goes on to pull my mask from my face, rips it off,” she said.
                </Text>
                <Text>{"\n"}</Text>
                <Text style={{...styles.text,fontSize:20,marginLeft:34}}>Beach vs Bellville:</Text>
            <Image source={require('../assets/images/Bheki.jpg')} style={styles.images}/>
                <Text style={styles.text}>
                Police minister Bheki Cele has conceded that SAPS management "dropped the ball" in its treatment of Sassa grant applicants who were sprayed with a water cannon in Cape Town.

He said this incident, compared to the treatment of protesters who defied the beach ban on Saturday, led to perceptions that officers in the Western Cape behaved like "apartheid police".

Cele said on Wednesday that he had spoken to station commanders from across the province about public perceptions of them being selective in their stance towards certain communities. Police managers were reminded of their constitutional and legislative mandate, he added.

“This perception of being apartheid police here in the Western Cape must come to an end. To say when we are in Bellville we are harder, and when we are in Muizenberg we are softer. Stop policing the faces and police the people of the Western Cape and the people of SA,” he said.

“That was a perception, whether right or wrong, but things happened which really do look like they are leading to this kind of perception.

“In Bellville you had poor people, vulnerable people going there because they are hungry, some of them are brought in wheelbarrows, some of them are on crutches .... The issue there was social distancing. That didn’t meet the approach we used. The approach we used was to approach them like people who are rioting - we used water cannons, we should not have done that.

“Then you have people going to the beach for leisure, who sit down and decide that we are going to break the law, and you become very circumstantial around them, saying that people were going to get hurt [if the police intervened].

“On this one we really dropped the ball - we did what we are not supposed to do. We are here to try to correct that.” 

Cele was speaking at Khayelitsha police station at the start of a day of inspections at three police stations including Gugulethu and Harare after weekend shooting incidents that left several people dead. 

He said two people were killed in a suspected retaliation attack in Cape Town after a shooting in Khayelitsha where six people were murdered in a shack on Saturday night.

The stations lie in the heart of communities besieged by violent extortionists collecting money from local and foreign business owners and who are alleged to be behind several murders, including a massacre in Gugulethu in November in which eight people were killed.

“There is a suspicion that the second shooting was in retaliation to the first shooting. Nobody has been arrested yet, but we are not very far from the people that we are pursuing here,” he said.

He said an arrest had been made in relation to a gang shooting in Ravensmead on Friday where three people were killed, including two 16-year-olds.

He said two more arrests were expected for that shooting. He said police information indicated that the 16-year-old victims were “good, innocent, young people”.

“It looks like they were in the wrong place at the wrong time,” he said.

He also spoke about a police officer being shot while in pursuit of suspects.

“We have had quite a bad month here in the Western Cape and we had to come down here to deal with matters and see how far can we go in terms of reassuring the police,” he said.
                </Text>
            </ScrollView>
       
            
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#EEF0F6',
        marginHorizontal: 20,
    },
    text: {
        flex:1,
        fontSize: 15,
        color:"#0C0D3B",
        borderRadius: 15,
        fontFamily: "Poppins-Regular",
    
        
    },
    images: {
        flex:1,
    alignSelf:'center',
        width:"80%",
        borderRadius: 15,
        marginLeft:10,
        marginRight:10,
        elevation:7,
    }
})
