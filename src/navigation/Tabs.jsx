import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import Home from '../assets/Icons/BottomNavigation/Home';
import HomeFill from '../assets/Icons/BottomNavigation/HomeFill';
import HomeScreen from '../screens/HomeScreen/HomeScree';
import Shop from '../assets/Icons/BottomNavigation/Shop';
import ShopFill from '../assets/Icons/BottomNavigation/ShopFill';
import ShopScreen from '../screens/Shop/Shop';
import Cart from '../assets/Icons/BottomNavigation/Cart';
import CartFill from '../assets/Icons/BottomNavigation/CartFill';
import CartScreen from '../screens/Cart/CartScreen';
import ProfileFill from '../assets/Icons/BottomNavigation/ProfileFill';
import ProfileScreen from '../screens/Profile/Profile';
import Profile from '../assets/Icons/BottomNavigation/Profile';

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    elevation: 0,
                    height: 90,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    ...styles.shadow,
                },
            }}>
            <Tab.Screen
                name="Home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.flexRow}>
                            {!focused ? <Home /> : <HomeFill />}
                        </View>
                    ),
                }}
                component={HomeScreen}
            />
            <Tab.Screen
                name="Shop"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.flexRow}>
                            {!focused ? <Shop /> : <ShopFill />}
                        </View>
                    ),
                }}
                component={ShopScreen}
            />
            <Tab.Screen
                name="Cart"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.flexRow}>
                            {!focused ? <Cart /> : <CartFill />}
                        </View>
                    ),
                }}
                component={CartScreen}
            />
            <Tab.Screen
                name="Profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.flexRow}>
                            {!focused ? <Profile /> : <ProfileFill />}
                        </View>
                    ),
                }}
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            width: 0,
            height: -6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    flexRow: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Tabs;