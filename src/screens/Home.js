import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


import Card from '../components/TinderCard';

import AnimatedStack from '../components/AnimatedStack';
import usersData from '../../assets/data/users';

import axios from "axios";
import {BASE_URL} from "../config";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAuth} from "../hooks/useAuth";

const HomeScreen = ({isUserLoading, user}) => {
    const {auth, state} = useAuth();
    const [loading, setLoading] = React.useState(false);
    const [users, setUsers] = useState([]);
    const [matchesIds, setMatchesIds] = useState(null); // all user ids of people who we already matched
    const [currentUser, setCurrentUser] = useState(null);
    const [me, setMe] = useState(null);

    const onSwipeLeft = async (e) => {
        await axios.get(`${BASE_URL}/api/users/like/${state?.user?.user_id}/${e.user_id}`).then((res) => {
            console.log('success')
        }).catch((err) => {
            console.log("err", err)
        })

    };

    const onSwipeRight = async (e) => {
        await axios.get(`${BASE_URL}/api/users/unlike/${state?.user?.user_id}/${e.user_id}`).then((res) => {
            console.log('success')
        }).catch((err) => {
            console.log("err", err)
        })

    };

    const setCurrent = (e) => {
        setCurrentUser(users[e])
    }
    const handlePress = async (e, name) => {
        console.log(1)
        await axios.get(`${BASE_URL}/api/users/${name}/${state?.user?.user_id}/${currentUser.user_id}/`).then((res) => {
            console.log('success')
        }).catch((err) => {
            console.log("err", err)
        })
    }
    useEffect(() => {
        async function fetchData() {
            await axios.get(`${BASE_URL}/api/users/explore/${state?.user?.user_id}`).then((res) => {
                if (res.status == 200){
                    setUsers(res.data)
                }
            }).catch((err) => {
                console.log("err home", err)
            })
        }
        fetchData().then(r => r);
    }, [state]);
    return (
        <View style={styles.pageContainer}>
            <AnimatedStack
                data={users}
                renderItem={({item}) => <Card user={item} />}
                setCurrentUser={setCurrent}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />
            <View style={styles.icons}>

                <View  style={styles.button}>
                    <Entypo onPress={(e) => handlePress(e, 'unlike')} name="cross" size={30} color="#F76C6B" />
                </View>
                <View  style={styles.button}>
                    <FontAwesome onPress={(e) => handlePress(e, 'like')} name="heart" size={30} color="#4FCC94" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: '#ededed',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
    },
});

export default HomeScreen;