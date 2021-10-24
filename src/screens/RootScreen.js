import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './auth/Splash';
import Login from './auth/Login.js';
import Register from './auth/Register';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {

    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="LoginScreen" component={Login}/>
            <RootStack.Screen name="RegisterScreen" component={Register}/>
        </RootStack.Navigator>
    )
}

export default RootStackScreen;