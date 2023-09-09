import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'
import Tabs from './Tabs';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <View style={{ flex: 1 }}>
            <Drawer.Navigator
                screenOptions={{
                    drawerPosition: 'right',
                    drawerType: 'front',
                    drawerStyle: {
                        // width: "80%"
                    }
                }}
                drawerContent={props => <CustomDrawer {...props} />}
            >
                <Drawer.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerNavigation;