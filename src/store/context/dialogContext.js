import React, { useState } from "react";
import Toast from 'react-native-toast-message';

export const DialogContext = React.createContext();

export const DialogProvider = (props) => {

    const showMessage = (toastType, title, message) => {
        Toast.show({
            type: toastType,
            text1: title,
            text2: message,
            visibilityTime: 4000,
        });
    };

    const showError = (e) => {
        if (typeof e === 'string') {
            Toast.show({
                type: "error",
                text1: 'Error',
                text2: e,
                visibilityTime: 4000,
            });
            return;
        } else {
            Toast.show({
                type: "error",
                text1: 'Error',
                text2: e.message.message,
                visibilityTime: 4000,
            });
        }
    };

    return (
        <DialogContext.Provider
            value={{
                showMessage,
                showError,
            }}
        >
            {props?.children}
        </DialogContext.Provider>
    );
};
