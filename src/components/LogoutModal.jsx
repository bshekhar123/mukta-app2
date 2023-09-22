import {
    Modal,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useContext } from 'react';
import { DialogContext } from '../store/context/dialogContext';
import SmallButton from './SmallButton';
import { ENDPOINTS, base_url } from '../common/Constant';
import { doGET } from '../store/httpUtil/httpUtils';
import { removeLocalStorageItem } from '../store/localStorage';
import { UserContext } from '../store/context/userContext';

const LogoutModal = (props) => {
    const { showError } = useContext(DialogContext);
    const { token } = useContext(UserContext);

    const handleLogout = async () => {
        if (token === "guest") {
            props.navigation.navigate("Login");
        }
        try {
            const res = await doGET(`${base_url}${ENDPOINTS.logout}`);
            if (res.status === 200) {
                props.navigation.navigate("Login");
                await removeLocalStorageItem("token");
                await removeLocalStorageItem("account");
            }
            else {
                showError(res.data.message);
            }
        } catch (error) {
            console.log("Logout Error", error);
        }
    }

    const { visible, setVisible } = props
    return (
        <View>
            <Modal visible={visible} transparent={true}>
                <View style={styles.modalContainer}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            width: '100%',
                            padding: 25,
                        }}>
                        <View>
                            <View style={styles.modalHeaderStyle}>
                                <Text
                                    style={{
                                        fontWeight: '500',
                                        fontSize: 18,
                                        color: "#000000"
                                    }}>
                                    Logout From App
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: "#000000" }}>Are you sure you want to logout?</Text></View>
                            <View style={{ marginTop: 15, marginBottom: 10, flexDirection: 'row', justifyContent: 'center' }}>
                                <SmallButton
                                    onPress={() => {
                                        setVisible(false);
                                        handleLogout();
                                        // props?.onLogout();
                                    }}
                                    Text={'Yes, Logout'}
                                />
                                <SmallButton
                                    outline
                                    onPress={() => {
                                        setVisible(false);
                                    }}
                                    Text={'Cancel'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default LogoutModal;

const styles = StyleSheet.create({
    dropDownContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        paddingBottom: 10,
    },
    xContainer: {
        borderColor: 'black',
        backgroundColor: 'white',
        width: '87.33%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 13,
        borderWidth: 1,
        margin: 10,
        paddingLeft: 24,
    },
    xColumnContainer: {
        width: '27.33%',
        height: 120,
        alignItems: 'center',
        paddingLeft: 0,
    },
    selectedContainer: {
        borderColor: '#FFB619',
    },
    modalHeaderStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#D9D9D9',
        paddingBottom: 10,
        marginBottom: 10
    }
});
