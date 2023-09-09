import React, { useContext, useEffect } from 'react'
import { Image, View } from 'react-native'
import { UserContext } from '../store/context/userContext';
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from '../store/localStorage';

const Splash = ({ navigation }) => {
    const { getCustomer } = useContext(UserContext);
    const InitialFunction = async () => {
        // await removeLocalStorageItem("token");
        // await removeLocalStorageItem("account");
        const token = await getLocalStorageItem('token');
        if (token === null) {
            navigation.navigate("Login");
            return;
        }
        if (token === "guest") {
            return navigation.navigate("Drawer");
        }
        const res = await getCustomer();
        console.log(res?.status, res?.data?.profileComplete)
        if (res?.status != 200) {
            navigation.navigate("Login");
            return;
        }
        if (res?.data?.profileComplete) {
            await setLocalStorageItem("account", "2");
            navigation.navigate("Drawer");
            return;
        }
        if (!res?.data?.profileComplete) {
            await setLocalStorageItem("account", "1");
            navigation.navigate("AccountSetup");
            return;
        }
        const status = await getLocalStorageItem('account');
        if (status === "1") {
            navigation.navigate("AccountSetup");
            return;
        }
        if (status === "2") {
            navigation.navigate("Drawer");
            return;
        }
    }

    useEffect(() => {
        InitialFunction();
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require("./../assets/Images/Logo.png")} resizeMode='contain' style={{ width: 200, height: 200 }} />
        </View>
    )
}

export default Splash