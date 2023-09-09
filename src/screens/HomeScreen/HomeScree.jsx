import React from 'react'
import { Text, SafeAreaView, FlatList, View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import SearchField from '../../components/SearchField';
import Navbar from '../../components/Navbar';
import Heart from '../../assets/Icons/Heart';
import Rupee from '../../assets/Icons/Rupee';
import Sarees from '../../data/Saree';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            backgroundColor: '#fff',
            height: '100%'
        }}>
            <Navbar />
            <SearchField />
            <FlatList style={{ marginBottom: 50 }} showsVerticalScrollIndicator={false} data={Sarees} keyExtractor={item => { item.id }} numColumns={2} renderItem={({ item }) => (
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Product")}>
                    <View>
                        <Image source={require("../../data/image/1.jpg")} style={styles.image} />
                    </View>
                    <View style={styles.icon}><Text style={styles.name}>{item.name}</Text>
                        <Pressable>
                            <Heart style={styles.heart} />
                        </Pressable>
                    </View>
                    <Text style={styles.price}> <Rupee /> {item.price}</Text>
                    <View style={styles.iconContainer}>
                    </View>
                </TouchableOpacity>
            )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        flex: 0.5,
        marginHorizontal: 8,
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10,
    },
    heart: {
        marginTop: 2,
    },
    icon: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 110,
        height: 200,
        resizeMode: "contain",
    },
    name: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: '#888888',
        textAlign: 'center',
    },
    iconContainer: {
        marginLeft: 'auto',
    },
});

export default HomeScreen;