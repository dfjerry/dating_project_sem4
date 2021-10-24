import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


const Profile = ({first, last ,uri, onPress}) => {
    return(
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Image source={{uri: uri ? uri : "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png"}} style={styles.avatarStyle}/>
            <Text style={styles.nameStyle}>{first} {last}</Text>
        </TouchableOpacity>
    )
}
export default Profile;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:20,
        marginRight:17
    },
    avatarStyle:{
        width:60,
        height:60,
        borderRadius:30
    },
    nameStyle:{
        marginTop:10,
        fontSize:11,
        color:'#fff',
        fontFamily:'Montserrat_700Bold'
    }
})