import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Navbar from '../../components/Navbar';
// import sarees from '../../data/Saree';
import Rupee from '../../assets/Icons/Rupee';
import { doGET, doPOST } from '../../store/httpUtil/httpUtils';
import { ENDPOINTS, base_url, getImage } from '../../common/Constant';
import { useFocusEffect } from '@react-navigation/native';
import { UserContext } from '../../store/context/userContext';
import { DialogContext } from '../../store/context/dialogContext';

const Product = ({ route }) => {
    const { _id } = route?.params;
    const [data, setData] = React.useState({});
    const { token, accountData } = React.useContext(UserContext);
    const { showError, showMessage } = React.useContext(DialogContext);

    const fetchSareeData = async () => {
        try {
            const res = await doGET(`${base_url}${ENDPOINTS.getSaree(_id)}`)
            if (res.status === 200)
                setData(res.data)
            else
                console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(React.useCallback(() => {
        fetchSareeData()
    }, []))

    const handleCart = async () => {
        if (token == 'guest')
            return showError("Login to use the Cart")
        try {
            const res = await doPOST(`${base_url}${ENDPOINTS.addToCart}`, { customer_id: accountData?._id, saree_id: _id })
            if (res.status == 200) {
                showMessage("success", res?.data?.message)
            }
            else if (res.status == 400) {
                showError(res?.data?.message)
            }
            else {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        // <SafeAreaView style={{
        //     backgroundColor: '#fff',
        //     height: '100%'
        // }}>
        //     <Navbar />
        //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        //         flexDirection: 'column',
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //     }} style={styles.card}>
        //         <View style={{ alignItems: 'center', marginBottom: 50, width: '100%' }}>
        //             <Image source={{ uri: getImage(data?.thumbnail) }} style={styles.image} />
        //             <View style={styles.detailsContainer}>
        //                 <Text style={styles.name}>{data?.name}</Text>
        //                 <Text style={styles.description}>{data?.description}</Text>
        //                 <View style={styles.priceContainer}>
        //                     <Text style={styles.price}> <Rupee /> {data?.price}</Text>
        //                 </View>
        //                 <View style={styles.rowtext}>
        //                     <View>
        //                         <Text style={styles.gut}>Deliver to- Shekhar</Text>
        //                         <Text style={styles.guta}>F7 NIT Campus, kkr</Text>

        //                     </View>
        //                     <TouchableOpacity style={styles.buttonContainer}>
        //                         <Text style={styles.buttonText}>Change</Text>
        //                     </TouchableOpacity>
        //                 </View>
        //                 <View style={styles.buttonsContainer}>
        //                     <TouchableOpacity style={styles.button} onPress={handleCart}>
        //                         <Text style={styles.cont}>Add to cart</Text>
        //                     </TouchableOpacity>
        //                     <TouchableOpacity style={styles.button}>
        //                         <Text style={styles.cont}>Buy now</Text>
        //                     </TouchableOpacity>
        //                 </View>
        //             </View>
        //         </View>
        //     </ScrollView>
        // </SafeAreaView>
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Screen 2</Text>
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
        marginTop: 10,
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
        marginTop: 5,
        width: '100%'
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