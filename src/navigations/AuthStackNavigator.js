import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../src/screens/auth/Login';
import Register from '../../src/screens/auth/Register';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export function AuthStackNavigator() {
    return (
        <AuthStack.Navigator
            mode={'modal'}
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name={'LoginStack'}>
                {() => (
                    <LoginStack.Navigator
                        mode={'card'}
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <LoginStack.Screen name={'Login'} component={Login} />
                    </LoginStack.Navigator>
                )}
            </AuthStack.Screen>
            <AuthStack.Screen name={'Register'} component={Register} />
        </AuthStack.Navigator>
    );
}
