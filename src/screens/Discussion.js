import React, {useEffect, useState} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../components/LastWatch';
import Received from '../components/Received';
import Sent from '../components/Sent';
import Data from '../dummy/Data.json';
import Input from '../components/Input';
import axios from "axios";
import {BASE_URL} from "../config";

const Discussion = ({ route, navigation }) => {
    const { itemName , itemPic, itemId, currentUser } = route.params;
    const [inputMessage, setMessage] = useState('');
    const [mess, setMess] = useState('');
    const [room, setRoom] = useState(null);
    const send = async () => {
        await axios.post(`${BASE_URL}/api/users/chat/`, {
            "user_id": currentUser,
            "participant_id": room,
            "message_text": mess
        }).then(async (res) => {
            const date = res.data;
            date.time_send = new Date();
            inputMessage.push(res.data);
            setMessage(inputMessage)
            setMess('');
        }).catch(err => console.log("diss", err))

    };
    async function fetchData() {
        await axios.get(`${BASE_URL}/api/users/chat/${itemId}/${currentUser}`).then(async (res) => {
            if (res.status == 200){
                // console.log(11111,res.data)
                setRoom(res.data);
                await axios.get(`${BASE_URL}/api/users/chat/participant/${res.data}`).then(res2 => {
                    setMessage(res2.data)
                    // console.log(res2.data)
                }).catch(err => console.log("mess", err))
            }
        }).catch((err) => {
            console.log("err diss", err)
        })
    }
    const appRefreshRate = 2000;
    useEffect(() => {
        let interval;
        interval = setInterval(fetchData, appRefreshRate)
        return () => clearInterval(interval)
    }, [appRefreshRate])
    console.log(mess)
    return(
        <LinearGradient
            colors={["#f26a50","#f26a50", "#f20045"]}
            style={styles.container}
        >
            <View style={styles.main}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                    >
                        <Icon name='left' color='#000119' size={24}/>
                    </TouchableOpacity>
                    <Text style={styles.username}>{itemName}</Text>
                    <Image source={{uri:itemPic}} style={styles.avatar}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <LastWatch  checkedOn='Today'/>
                    {
                        inputMessage ? inputMessage.map((e, index) => {
                            if (e.user_id != currentUser) {
                                return (<Received
                                    key={index}
                                    id={index}
                                    last={inputMessage.length}
                                    image={itemPic}
                                    message={e.message_text}
                                    time={e.time_send}
                                />)
                            }else{
                                return (<Sent
                                    key={index}
                                    id={index}
                                    last={inputMessage.length}
                                    message={e.message_text}
                                    time={e.time_send}
                                />)
                            }
                        }) : null
                    }
                    {/*<View>*/}
                    {/*    {txt}*/}
                    {/*</View>*/}
                </ScrollView>
            </View>
            <Input
                inputMessage={mess}
                setMessage={(mess)=> setMess(mess)}
                onSendPress={send}
            />
        </LinearGradient>
    )
}
export default Discussion;

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:"100%"
    },
    main:{
        backgroundColor:'#FFF',
        height:'88%',
        paddingHorizontal:20,
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        paddingTop:40,
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    username:{
        color:"#000119",
        fontFamily:'Montserrat_700Bold',
        fontSize:20,
        flex:1,
        textAlign:'center'
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:20,
    }

})