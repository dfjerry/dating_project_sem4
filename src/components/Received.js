import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {formatAMPM} from "../utils/common";


const Received = ({image, message, time, id, last}) => {
    return(
        <View style={styles.container}>
          <Image source={{uri:image}} style={styles.img}/>
          <View style={{marginTop: 10}}>
               <Text style={styles.message}>{message}</Text>
              {
                  id === (last - 1) ? <Text style={styles.duration}>{formatAMPM(time)}</Text> : null
              }
          </View>
        </View>
    )
}
export default Received;
const styles = StyleSheet.create({
    duration:{
        color:'#b6b6b6',
        fontSize:11,
        marginHorizontal:15,
        marginTop:10,
        fontFamily:'Montserrat_600SemiBold',
    },
    container:{
        flexDirection:'row',
        marginTop:5,
        width:250
    },
    img:{
        width:40,
        height:40,
        borderRadius:20
    },
    message:{
        fontSize:13,
        marginHorizontal:15,
        fontFamily:'Montserrat_700Bold'
    }
})