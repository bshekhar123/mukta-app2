import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import WhiteLogo from '../assets/Icons/WhiteLogo'

const CustomDrawer = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'red' }}>
                <Text style={{ color: "#ffffff" }}>Danishbir</Text>
                <View style={{height: 40, width: 40}}>
                    <WhiteLogo />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CustomDrawer