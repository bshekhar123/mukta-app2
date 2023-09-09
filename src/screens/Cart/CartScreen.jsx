import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Saree from '../../data/Saree';
import Plus from '../../assets/Icons/Plus';
import Minus from '../../assets/Icons/Minus';
import Navbar from '../../components/Navbar';

const OneItem = ({ cartItem, handleIncrement, handleDecrement, quantity }) => (
    <View style={styles.container}>
        <View style={styles.cartItem}>
            <View style={styles.itemInfoContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1692046904610-b5f0786a67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" }} style={styles.image} resizeMode="cover" />
                </View>
                <View style={styles.itemInfo}>
                    <Text style={styles.name}>{cartItem.name}</Text>
                    <Text style={styles.description}>{cartItem.description}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}> {cartItem.price}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
                                <Minus />
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
                                <Plus />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.extraButtonsContainer}>
                        <TouchableOpacity style={styles.extraButton}>
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

const AddToCartPage = () => {
    const cartItem = Saree.find((item) => item.id === 1);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
            <Navbar />
            <View style={styles.header}>
                <Text style={styles.title}>Cart Items</Text>
                <TouchableOpacity style={styles.cartButton} >
                    <Text style={styles.cartButtonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={[{ id: 1 }, { id: 2 }]}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                style={{marginBottom: 50}}
                renderItem={() => <OneItem cartItem={cartItem} handleIncrement={handleIncrement} handleDecrement={handleDecrement} quantity={quantity} />}
            />
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