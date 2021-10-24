import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from './src/hooks/useAuth';
import {AuthContext} from './src/context/AuthContext';
import {UserContext} from './src/context/UserContext';
import {
    useFonts,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import MainStackNavigator from "./src/navigations/MainStackNavigator";
import {AuthStackNavigator} from "./src/navigations/AuthStackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
const RootStack = createStackNavigator();

const App = () => {
    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_600SemiBold,
        Montserrat_800ExtraBold
    });
    const {auth, state} = useAuth();
    if (!fontsLoaded) {
        return <AppLoading/>
    }
    function renderScreens() {
        return state.user ? (
            <RootStack.Screen name={'MainStack'}>
                {() => (
                    <UserContext.Provider value={state}>
                        <MainStackNavigator />
                    </UserContext.Provider>
                )}
            </RootStack.Screen>
        ) : (
            <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
        );
    }
    return (
        <AuthContext.Provider value={auth}>
            <NavigationContainer>
                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animationEnabled: false,
                    }}>
                    {renderScreens()}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
export default App;