import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Search from '../assets/Icons/Search'

const SearchField = () => {
    const [placeholderVisible, setPlaceholderVisible] = React.useState(true);
    const handleInputFocus = () => {
        setPlaceholderVisible(false);
    };
    const handleInputBlur = () => {
        setPlaceholderVisible(true);
    };
    return (
        <View style={styles.container}>
            <Search style={styles.searchIcon} />
            <TextInput
                style={styles.input}
                placeholder={placeholderVisible ? 'Search by type' : ''}
                placeholderTextColor="#FF0000"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                textAlign="center"
            />
        </View>
    )
}

export default SearchField;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
        paddingHorizontal: 12,
        marginTop: 16,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    searchIcon: {
        marginRight: 8,
        width: 17,
    },
    input: {
        flex: 1,
        color: '#000000',
        fontSize: 16,
        paddingVertical: 8,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});