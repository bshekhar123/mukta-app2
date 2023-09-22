import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Navbar from '../../components/Navbar';
import { getImage, getProfileImage } from '../../common/Constant';
import { UserContext } from '../../store/context/userContext';
import ArrowRight from '../../assets/Icons/ArrowRight';
import Logout from '../../assets/Icons/Logut';
import LogoutModal from '../../components/LogoutModal';

const ProfileScreen = ({ navigation }) => {
    const { accountData, token } = React.useContext(UserContext);
    const [visible, setVisible] = React.useState(false);
    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
            <Navbar />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                    <View style={{ paddingLeft: 20 }}>
                        <Image
                            resizeMode="cover"
                            style={styles.profileImage}
                            source={{ uri: token == 'guest' ? "https://institutcommotions.com/wp-content/uploads/2018/05/blank-profile-picture-973460_960_720-1.png" : getProfileImage(accountData?.profileImage) }}
                        />
                    </View>
                    <View style={styles.userData}>
                        <Text style={styles.name}>{token == 'guest' ? "Guest User" : accountData?.name}</Text>
                        <Text style={styles.phNum}>{token != 'guest' ? accountData?.phone : null}</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginBottom: 55, height: 70, borderTopWidth: 2, marginHorizontal: 20, borderTopColor: 'rgba(0, 0, 0, 0.3)' }}>
                <TouchableOpacity style={styles.options} onPress={() => setVisible(true)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.optionIcon}>{<Logout />}</View>
                        <Text style={styles.optionTitle}>{"Logout"}</Text>
                    </View>
                    <View style={styles.arrowClick}><ArrowRight /></View>
                </TouchableOpacity >
                <LogoutModal visible={visible} setVisible={setVisible} navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        height: 90,
        width: 90,
        borderRadius: 65,
        borderWidth: 2,
        borderColor: 'red'
    },
    userData: { paddingHorizontal: 20, justifyContent: 'center' },
    name: { fontSize: 22, fontWeight: 500, marginVertical: 5, color: "#000000" },
    phNum: { fontSize: 15, fontWeight: 400, marginVertical: 5, color: '#262728' },
    options: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12 },
    optionIcon: { backgroundColor: 'rgba(255, 0, 0, 0.6)', padding: 13, borderRadius: 100 },
    optionTitle: { fontSize: 16, fontWeight: 400, paddingLeft: 15, color: "#000000" },
    arrowClick: { justifyContent: 'center', paddingRight: 20 },

});

export default ProfileScreen;