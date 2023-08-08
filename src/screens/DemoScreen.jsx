import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const DemoScreen = () => {
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Test Screen</Text>
            <View style={{}}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholderStyle={{ color: 'gray' }}
                    style={{
                        backgroundColor: 'transparent',
                        borderColor: 'gray',
                        borderRadius: 5
                    }}
                />
                <TextInput
                    style={{
                        height: 49,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 5,
                        padding: 10,
                        marginBottom: 10,
                    }}
                    placeholder="Name"
                    placeholderTextColor='gray'
                    value={name}
                    onChangeText={setName}
                />
            </View>
        </SafeAreaView>
    )
}

export default DemoScreen;