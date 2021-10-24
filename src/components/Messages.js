import React, {useEffect, useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";
import {BASE_URL} from "../config";
import {formatAMPM} from "../utils/common";

const randomTime = () => {
    const hrs = Math.round(Math.random()*12);
    const mins = Math.round(Math.random()*60);
    const hFormat = hrs < 10 ? '0' : '';
    const mFormat = mins < 10 ? '0' : '';
    const amPm = hrs < 12 ? 'AM' : 'PM';
    return String(hFormat + hrs + ":"+ mFormat + mins + " " + amPm)
}

const Messages = ({ first, last, uri, onPress, currentUser, id }) => {
    // const [count, setCount] = useState(0);
    const [mess, setMess] = useState('');
    const [room, setRoom] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await axios.get(`${BASE_URL}/api/users/chat/${currentUser}/${id}`).then(async (res) => {
                if (res.status == 200){
                    setRoom(res.data);
                    await axios.get(`${BASE_URL}/api/users/chat/participant/${res.data}`).then(res2 => {
                        // setCount(res2.data.length);
                        setMess(res2.data.pop())
                    }).catch(err => console.log("mess", err))
                }
            }).catch((err) => {
                console.log("err mess", err)
            })
        }
        fetchData().then(r => r);
    }, [id])
    return(
       <TouchableOpacity 
        onPress={onPress}
        style={styles.container}
       >
           {/*{*/}
           {/*    count > 0 ? (*/}
           {/*        <LinearGradient*/}
           {/*         colors={['#f26a50', '#f20045', '#f20045']}*/}
           {/*         style={styles.gradientStyle}*/}
           {/*        >*/}
           {/*            <Text style={styles.count}>{count}</Text>*/}
           {/*        </LinearGradient>*/}
           {/*    ):*/}
           {/*        <LinearGradient*/}
           {/*            colors={['#f26a50', '#f20045', '#f20045']}*/}
           {/*            style={styles.gradientStyle}*/}
           {/*        >*/}
           {/*            <Text style={styles.count}>0</Text>*/}
           {/*        </LinearGradient>*/}
           {/*}*/}
               
               <Image source={{uri: uri ? uri : "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png"}} style={styles.image}/>
               <View style={{marginLeft:10}}>
                 <Text style={styles.username}>{first} {last}</Text>
                 <Text style={styles.text}>{mess?.message_text}</Text>
               </View>
               <Text style={styles.duration}>{formatAMPM(mess?.time_send)}</Text>
       </TouchableOpacity>
    )
}
export default Messages;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        marginTop:30
    },
    gradientStyle:{
       height:20,
       width:20,
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       marginRight:20,

    },
    count:{
        color:'#fff',
        fontFamily:'Montserrat_700Bold',
        position: 'absolute'
    },
    image:{
        width:60,
        height:60,
        borderRadius:30
    },
    text:{
        color:'#b6b6b6',
        fontFamily:'Montserrat_600SemiBold',
        fontSize:11
    },
    duration:{
        color:'#000119',
        fontSize:12,
        flex:1,
        marginLeft:280,
        position:'absolute',
        fontFamily:'Montserrat_600SemiBold'
    },
    username:{
        color:'#000119',
        fontFamily:'Montserrat_700Bold'
    }
})
