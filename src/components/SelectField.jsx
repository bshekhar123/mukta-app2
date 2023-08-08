import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const SelectField = ({ open, setOpen, items, value, onChange, placeholder }) => {
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={onChange}
            placeholderStyle={{ color: 'gray' }}
            placeholder={placeholder}
            style={{
                backgroundColor: 'transparent',
                borderColor: 'gray',
                borderRadius: 5,
                marginVertical: 10
            }}
        />
    )
}

export default SelectField;