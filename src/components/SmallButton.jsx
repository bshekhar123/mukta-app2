import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const SmallButton = (props) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
        }}>
            <TouchableOpacity
                onPress={props?.onPress}
                style={{
                    borderRadius: 20,
                    paddingVertical: 6,
                    paddingHorizontal: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: props?.outline ? 'white' : 'rgba(255, 0, 0, 0.7)',
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: props?.outline ? 'rgba(0, 0, 0, 0.3)' : 'white',
                }}>
                <Text style={{ fontWeight: '500', fontSize: 17, color: "#000000" }}>
                    {props?.Text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SmallButton;

const styles = StyleSheet.create({});
