import React from 'react'
import { Text, SafeAreaView, FlatList, View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import SearchField from '../../components/SearchField';
import Navbar from '../../components/Navbar';
import Heart from '../../assets/Icons/Heart';
import Rupee from '../../assets/Icons/Rupee';
// import Sarees from '../../data/Saree';
import { doGET } from '../../store/httpUtil/httpUtils';
import { ENDPOINTS, base_url, getImage } from '../../common/Constant';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    const [data, setData] = React.useState([]);
    const fetchData = async () => {
        try {
            const res = await doGET(`${base_url}${ENDPOINTS.getAllSarees}`);
            // console.log(res);
            if (res.status === 200) {
                setData(res.data);
            }
            else {
                console.log(res)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(React.useCallback(() => {
        fetchData()
    }, []))

    return (
        // <SafeAreaView style={{
        //     backgroundColor: '#fff',
        //     height: '100%'
        // }}>
        //     <Navbar />
        //     <SearchField />
        //     <FlatList style={{ marginBottom: 50 }} showsVerticalScrollIndicator={false} data={data} keyExtractor={item => { item.id }} numColumns={2} renderItem={({ item }) => (
        //         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Product", { _id: item?._id })}>
        //             <View>
        //                 {/* <Image source={require("../../data/image/1.jpg")} style={styles.image} /> */}
        //                 <Image source={{uri: getImage(item?.thumbnail)}} style={styles.image} />
        //             </View>
        //             <View style={styles.icon}><Text style={styles.name}>{item.name}</Text>
        //                 <Pressable>
        //                     <Heart style={styles.heart} />
        //                 </Pressable>
        //             </View>
        //             <Text style={styles.price}> <Rupee /> {item.price}</Text>
        //             <View style={styles.iconContainer}>
        //             </View>
        //         </TouchableOpacity>
        //     )}
        //     />
        // </SafeAreaView>
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Screen</Text>
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