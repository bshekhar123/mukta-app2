import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login")
        }, 1500);
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require("./../assets/Images/Logo.png")} resizeMode='contain' style={{ width: 200, height: 200 }} />
        </View>
    )
}

export default Splash