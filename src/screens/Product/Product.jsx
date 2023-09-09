import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Navbar from '../../components/Navbar';
import sarees from '../../data/Saree';
import Rupee from '../../assets/Icons/Rupee';

const Product = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: '#fff',
            height: '100%'
        }}>
            <Navbar />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }} style={styles.card}>
                <View style={{ alignItems: 'center', marginBottom: 50 }}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1692046904610-b5f0786a67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" }} style={styles.image} />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.name}>{sarees[0].name}</Text>
                        <Text style={styles.description}>{sarees[0].description}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}> <Rupee /> {sarees[0].price}</Text>
                        </View>
                        <View style={styles.rowtext}>
                            <View>
                                <Text style={styles.gut}>Deliver to- Shekhar</Text>
                                <Text style={styles.guta}>F7 NIT Campus, kkr</Text>

                            </View>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.cont}>Add to cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.cont}>Buy now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        paddingTop: 25
    },
    rowtext: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10
    },
    gut: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    guta: {
        // fontWeight: 'bold',
        fontSize: 13,
        color: "gray",
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        aspectRatio: 1
    },
    detailsContainer: {
        padding: 10,
        marginTop: 5
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#888888',
        marginBottom: 5,
    },
    priceContainer: {
        // backgroundColor: '#EFEFEF',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
        marginTop: 5
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
    },
    buttonContainer: {
        // backgroundColor: "white",
        borderColor: "#FF0000",
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FF0000',
        fontWeight: 'bold',
    },
    cont: {
        color: 'white',
        // fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    button: {
        flex: 1,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        padding: 10,
        marginRight: 5,
        alignItems: 'center',
    },
});

export default Product;