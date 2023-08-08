import React from 'react';
import { TextInput } from 'react-native';

const InputField = ({ placeholder, value, onChange, keyboardType }) => {
    return (
        <TextInput
            style={{
                height: 49,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                padding: 10,
                marginVertical: 10,
            }}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
        />
    )
}

export default InputField