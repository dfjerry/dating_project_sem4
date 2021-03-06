import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {formatAMPM} from "../utils/common";

const Sent = ({message, id, last, time}) => {
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#f26a50','#f20045']}
                style={styles.gradient}
            >
                <Text style={styles.text}>{message}</Text>
            </LinearGradient>
            {
                id === (last - 1) ? <Text style={styles.duration}>{formatAMPM(time)}</Text> : null
            }
        </View>
    )
}
export default Sent;

const styles = StyleSheet.create({
    container:{
        marginVertical:4,
        alignSelf:'flex-end'
    },
    duration:{
        color:'#b6b6b6',
        fontSize:11,
        marginTop:5,
        fontFamily:'Montserrat_600SemiBold',
        alignSelf:'flex-end'
    },
    gradient:{
        maxWidth:220,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
    },
    text:{
        color:'#fff',
        fontFamily:'Montserrat_700Bold'
    }
})