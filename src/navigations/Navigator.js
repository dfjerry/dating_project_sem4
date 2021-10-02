import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Discussion from '../screens/Discussion';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Login from '../screens/auth/Login';
import Splash from '../screens/auth/Splash';
import Register from '../screens/auth/Register';
import Forgotten_Password from '../screens/auth/Forgotten_Password';
import Icon from '@expo/vector-icons/Ionicons';
import Icon2 from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:'#f2404c',
                inactiveTintColor:'#000119',
                style:{
                    height:65,
                    justifyContent:'center',
                    paddingVertical:15,
                    backgroundColor:'#FFF',
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name='Splash'
                component={Splash}
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color,size})=>(
                        <Icon2 name='eye' color={color} size={30}/>
                    )
                }}
            />
            <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color,size})=>(
                        <Icon name='ios-person' color={color} size={30}/>
                    )
                }}
            />
            
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color,size})=>(
                        <Icon name='ios-compass' color={color} size={30}/>
                    )
                }}
            />
            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color,size})=>(
                        <Icon2 name='chat' color={color} size={30}/>
                    )
                }}
            />
            
            {/*<Tab.Screen*/}
            {/*    name='Profile'*/}
            {/*    component={Profile}*/}
            {/*    options={{*/}
            {/*        tabBarLabel:'',*/}
            {/*        tabBarIcon:({color,size})=>(*/}
            {/*            <Icon name='ios-person' color={color} size={30}/>*/}
            {/*        )*/}
            {/*    }}*/}
            {/*/>*/}
            
        </Tab.Navigator>
    );
};
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
};

const ChatStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Home' component={BottomTabNavigator}/>
            <Stack.Screen name='Chat' component={Chat}/>
            <Stack.Screen name='Discussion' component={Discussion}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Forgotten_Password' component={Forgotten_Password}/>
        </Stack.Navigator>
    )
}

export default ChatStackNavigator;