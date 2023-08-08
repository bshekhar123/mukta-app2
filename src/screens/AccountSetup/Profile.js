import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState(''); // Initialize with an empty value
    const [address, setAddress] = useState('');


    // Address details states
    const [houseNo, setHouseNo] = useState('');
    const [area, setArea] = useState('');
    const [pincode, setPincode] = useState('');
    const [town, setTown] = useState('');
    const [state, setState] = useState('');

    const handleProfileSubmit = () => {
        console.log('Profile Submitted:', { name, phone, email, gender, address });
    };

    return (


        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
                <View style={styles.header}>
                    <Text style={styles.title}>Account Setup</Text>
                </View>

                <InputField placeholder={"Name"} value={name} onChange={setName} />
                <InputField placeholder={"Email"} value={email} onChange={setEmail} keyboardType={'email-address'} />

                <SelectField items={[
                    { label: 'Male', value: '1' },
                    { label: 'Female', value: '2' }
                ]} open={open} setOpen={setOpen} value={gender} onChange={setGender} placeholder="Gender" />

                <Text style={styles.sectionTitle}>Address</Text>

                <InputField placeholder={"House No."} value={houseNo} onChange={setHouseNo} />
                <InputField placeholder="City" value={area} onChange={setArea} />
                <InputField placeholder="State" value={pincode} onChange={setPincode} />
                <InputField placeholder="Country" value={town} onChange={setTown} />
                <InputField placeholder="Pin Code" value={state} onChange={setState} keyboardType="numeric" />

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
        // fontWeight: 'bold',
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
});

export default Profile;
