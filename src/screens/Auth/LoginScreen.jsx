import React, { useContext, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Google from '../../assets/Icons/Google';
import { DialogContext } from '../../store/context/dialogContext';
import { doPOST } from '../../store/httpUtil/httpUtils';
import { ENDPOINTS, base_url } from '../../common/Constant';
import { setLocalStorageItem } from '../../store/localStorage';

const Login = ({ navigation }) => {
    const { showMessage, showError } = useContext(DialogContext);
    const [authState, setAuthState] = useState(1);
    const [data, setData] = useState({});

    const handleClick = async () => {
        try {
            if (authState === 1) {
                const res = await doPOST(`${base_url}${ENDPOINTS.sendOtp}`, data)
                if (res.status === 200) {
                    showMessage("success", res.data?.message);
                    setAuthState(2);
                }
                else {
                    showError(res?.data?.message)
                }
            } // account setup -> 1: false profile complete, 2: profile complete true, 3: guest
            else {
                const res = await doPOST(`${base_url}${ENDPOINTS.verifyOtp}`, data)
                if (res.status === 200) {
                    showMessage("success", "OTP Verified");
                    await setLocalStorageItem("token", res?.data?.accessToken);
                    if (!res?.data?.profileComplete) { // 1 - false, 2 - true
                        await setLocalStorageItem("account", 1);
                        navigation.navigate("AccountSetup");
                    }
                    else {
                        await setLocalStorageItem("account", 2);
                        navigation.navigate("Drawer");
                    }
                }
                else {
                    showError(res?.data?.error)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleGuestClick = async () => {
        try {
            await setLocalStorageItem("token", "guest");
            await setLocalStorageItem("account", 3);
            navigation.navigate("Drawer");

        } catch (error) {
            console.log(error)
        }
    }

    const handleTextInput = v => {
        if (authState === 1) setData({ ...data, phoneNumber: v })
        else setData({ ...data, otp: v })
    }
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.container} contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={styles.logoContainer} >
                <Image source={require('../../assets/Images/Logo.png')} style={styles.logo} />
            </View>
            <Text style={styles.loginText}>{authState === 1 ? "Login / Sign up" : "Enter 6 Digit OTP"}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={authState === 1 ? data?.phoneNumber : data?.otp}
                    placeholder={authState === 1 ? "Phone No" : "6 Digit OTP"}
                    keyboardType="phone-pad"
                    onChangeText={handleTextInput}
                    maxLength={authState === 1 ? 10 : 6}
                />
                <TouchableOpacity style={styles.button} onPress={handleClick}>
                    <Text style={styles.buttonText}>{authState === 1 ? "Get OTP" : "Verify"}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.googleButton}>
                <Text style={styles.buttonutText}>Continue with Google</Text>
                {/* <TouchableOpacity style={styles.gogbut}>
                    <Google />
                </TouchableOpacity> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.guestBtn} onPress={handleGuestClick}>
                <Text style={styles.buttonutText}>Continue as Guest</Text>
                {/* <TouchableOpacity style={styles.gogbut}>
                    <Google />
                </TouchableOpacity> */}
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    input: {
        height: 50,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        // backgroundColor: 'blue',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: "#FF0000",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FF0000',
        fontSize: 14,
        fontWeight: 'bold',
        // margin: 20,
        textAlign: 'center'
    },
    buttonutText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        // margin: 20,
    },
    googleButton: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    guestBtn: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default Login;
