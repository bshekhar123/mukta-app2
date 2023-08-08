import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLocalStorageItem = async (item) => {
    try {
        const value = await AsyncStorage.getItem(item);
        return JSON.parse(value);
    } catch (error) {
        return null;
    }
};

export const setLocalStorageItem = async (item, value) => {
    try {
        await AsyncStorage.setItem(item, JSON.stringify(value));
    } catch (error) {
        console.log("SetItem error ", error)
        return null;
    }
}

export const removeLocalStorageItem = async (item) => {
    try {
        await AsyncStorage.removeItem(item);
    } catch (error) {
        console.log("removeItemError error ", error)
        return null;
    }
}