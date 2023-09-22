import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Saree from '../../data/Saree';
import Plus from '../../assets/Icons/Plus';
import Minus from '../../assets/Icons/Minus';
import Navbar from '../../components/Navbar';
import { doGET, doPOST } from '../../store/httpUtil/httpUtils';
import { ENDPOINTS, base_url, getImage } from '../../common/Constant';
import { useFocusEffect } from '@react-navigation/native';

const OneItem = ({ customer_id, saree_id, amount, _id, removeCart }) => {
    const [saree, setSaree] = React.useState({})
    const [amt, setAmt] = React.useState(amount)
    const handleIncrement = async () => {
        try {
            const res = await doPOST(`${base_url}${ENDPOINTS.updateCartCount}`, { customer_id, saree_id, type: 1 })
            console.log(res?.data?.qty)
            setAmt(res?.data?.qty)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDecrement = async () => {
        if (amt > 1) {
            try {
                const res = await doPOST(`${base_url}${ENDPOINTS.updateCartCount}`, { customer_id, saree_id, type: 0 })
                setAmt(res?.data?.qty)
            } catch (error) {
                console.log(error)
            }
        }
    }
    const fetchSaree = async () => {
        try {
            const res = await doGET(`${base_url}${ENDPOINTS.getSaree(saree_id)}`)
            if (res.status === 200)
                setSaree(res.data)
            else
                console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        fetchSaree();
    }, [amt])
    return (
        <View View style={styles.container} >
            <View style={styles.cartItem}>
                <View style={styles.itemInfoContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: getImage(saree?.thumbnail) }} style={styles.image} resizeMode="cover" />
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={styles.name}>{saree.name}</Text>
                        <Text style={styles.description}>{saree.description}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}> {saree.price}</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
                                    <Minus />
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{amt}</Text>
                                <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
                                    <Plus />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.extraButtonsContainer}>
                            <TouchableOpacity style={styles.extraButton} onPress={async () => await removeCart(_id)}>
                                <Text style={styles.extraButtonText}>Remove from cart </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.extraButton}>
                                <Text style={styles.extraButtonText}>Add to wishlist</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.extraButton}>
                                <Text style={styles.extraButtonText}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const AddToCartPage = () => {
    const [data, setData] = React.useState([]);

    const fetchData = async () => {
        try {
            const res = await doGET(`${base_url}${ENDPOINTS.getCart}`);
            if (res.status == 200)
                setData(res.data)
            else {
                setData([])
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeCart = async (_id) => {
        try {
            const res = await doPOST(`${base_url}${ENDPOINTS.removeCart}`, { _id })
            if (res.status == 200)
                await fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(React.useCallback(() => {
        fetchData();
    }, []))

    return (
        // <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
        //     <Navbar />
        //     <View style={styles.header}>
        //         <Text style={styles.title}>Cart Items</Text>
        //         <TouchableOpacity style={styles.cartButton} >
        //             <Text style={styles.cartButtonText}>Checkout</Text>
        //         </TouchableOpacity>
        //     </View>
        //     {
        //         data.length === 0 ? (
        //             <Text style={{
        //                 marginTop: 20,
        //                 textAlign: 'center',
        //                 fontSize: 20,
        //                 color: 'red'
        //             }}>Empty Cart</Text>
        //         ) : (
        //             <FlatList
        //                 data={data}
        //                 showsVerticalScrollIndicator={false}
        //                 keyExtractor={item => item.id}
        //                 style={{ marginBottom: 50 }}
        //                 renderItem={({ item }) => <OneItem {...item} removeCart={removeCart} />}
        //             />
        //         )
        //     }
        // </SafeAreaView>
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Screen 3</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    title: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: "#FF0000"
    },
    cartButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    cartButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItem: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white', // Add background color
    },
    itemInfoContainer: {
        flexDirection: 'row', // Display viiew2 and view in a row
    },
    imageContainer: {
        flex: 1, // Take the full left side width
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    image: {
        flex: 1, // Take the full height of the border
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    itemInfo: {
        flex: 1, // Take the remaining space in the row
        padding: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Align button with the price
        justifyContent: "space-between"
    },
    price: {
        fontSize: 18,
        marginRight: 10,
        flexDirection: "row",
    },
    addToCartButton: {
        backgroundColor: 'red',
        paddingVertical: 5, // Make the button smaller
        paddingHorizontal: 10, // Make the button smaller
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    extraButtonsContainer: {
        marginTop: 20,
    },
    extraButton: {
        backgroundColor: '#FF0000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    extraButtonText: {
        color: 'white',
        fontSize: 16,
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FF0000',
        borderRadius: 19,
    },
    quantityButton: {
        // backgroundColor: 'gray',
        padding: 10,
        borderRadius: 100, // Make the button circular/
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 15,



    },

});

export default AddToCartPage;