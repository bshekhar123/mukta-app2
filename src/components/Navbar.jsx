import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Heart from '../assets/Icons/Heart';
import Bars from '../assets/Icons/Bars';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/Images/lastmukta1.png')} style={styles.logo} />
                <Text style={styles.storeName}>A Bengali Saree Store</Text>
            </View>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.button}>
                    <Heart />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Bars />
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 8,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    storeName: {
        fontSize: 6,
        color: '#000000',
        textAlign: "right",
        marginTop: 1,
        letterSpacing: 0.5,
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
    },
});

export default Navbar;