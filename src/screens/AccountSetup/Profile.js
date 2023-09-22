import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProfilePicSelect from '../../components/ProfilePicSelect';
import ArrowRight from '../../assets/Icons/ArrowRight';
import { doPOST } from '../../store/httpUtil/httpUtils';
import { ENDPOINTS, base_url } from '../../common/Constant';
import { DialogContext } from '../../store/context/dialogContext';

const Profile = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const [address, setAddress] = useState({});
    const [gender, setGender] = useState('');
    const { showMessage, showError } = useContext(DialogContext);

    const handleProfileSubmit = async () => {
        const add = [address]
        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("email", data?.email);
        formData.append("gender", gender);
        formData.append("address", JSON.stringify(add));
        formData.append("profileImage", { uri: data?.profileImage?.uri, name: data?.profileImage?.fileName, filename: data?.profileImage?.fileName })
        try {
            const res = await doPOST(`${base_url}${ENDPOINTS.accountSetup}`, formData)
            console.log(res);
            if (res.status === 200) {
                showMessage("success", res.data?.message);
                navigation.navigate("Drawer")
            }
            else {
                showError(res?.data?.message)
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (


        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15, marginBottom: 20 }}>
                <View style={styles.header}>
                    <Text style={styles.title}>Account Setup</Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <ProfilePicSelect data={data} setData={setData} />
                </View>

                <InputField placeholder={"Name"} value={data?.name} onChange={(v) => setData({ ...data, name: v })} style={{ marginVertical: 10 }} />
                <InputField placeholder={"Email"} value={data?.email} onChange={(v) => setData({ ...data, email: v })} keyboardType={'email-address'} style={{ marginVertical: 10 }} />

                <SelectField items={[
                    { label: 'Male', value: 1 },
                    { label: 'Female', value: 2 }
                ]} open={open} setOpen={setOpen} value={gender} onChange={setGender} placeholder="Gender" style={{ marginVertical: 10 }} />

                <Text style={styles.sectionTitle}>Address Details</Text>

                <InputField placeholder={"House No."} value={address?.addressLine} onChange={(v) => setAddress({ ...address, addressLine: v })} style={{ marginVertical: 10 }} />
                <InputField placeholder="City" value={address?.city} onChange={(v) => setAddress({ ...address, city: v })} style={{ marginVertical: 10 }} />
                <InputField placeholder="State" value={address?.state} onChange={(v) => setAddress({ ...address, state: v })} style={{ marginVertical: 10 }} />
                <InputField placeholder="Country" value={address?.country} onChange={(v) => setAddress({ ...address, country: v })} style={{ marginVertical: 10 }} />
                <InputField placeholder="Pin Code" value={address?.pin} onChange={(v) => setAddress({ ...address, pin: v })} keyboardType="numeric" style={{ marginVertical: 10 }} />

                <TouchableOpacity style={styles.submitButton} onPress={handleProfileSubmit}>
                    <Text style={styles.submitButtonText}>Submit Profile</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        color: "#FF0000"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    submitButton: {
        backgroundColor: '#FF0000',
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    noSetupDiv: { marginVertical: 15, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 2, paddingTop: 10, borderTopColor: 'gray' },
    noSetupTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000000"
    }
});

export default Profile;
