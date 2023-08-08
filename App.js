import React from 'react';
import 'react-native-gesture-handler'

import { UserProvider } from './src/store/context/userContext';
import Toast from 'react-native-toast-message';
import { DialogProvider } from './src/store/context/dialogContext';
import AppNavigator from './src/navigation/AppNavigator';

function App() {

  return (
    <DialogProvider>
      <UserProvider>
        <AppNavigator />
        <Toast />
      </UserProvider>
    </DialogProvider>
  );
}

export default App;
