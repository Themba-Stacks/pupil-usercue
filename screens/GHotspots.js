import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

export default function GHotspots() {
    return (
        <ScrollView showsHorizontalScrollIndicator={true}>
            <Image source={require('../assets/images/global.png')} style={styles.image}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        height:800,
        width:500,
    }
})
