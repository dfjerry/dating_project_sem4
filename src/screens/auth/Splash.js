import React from "react";
import {
    Text, 
    View, 
    Image,
    StyleSheet, 
    Dimensions,
    Animated,
    TouchableWithoutFeedback
 } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Splash extends React.Component {
    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(200),
    }
    async componentDidMount(){
        Animated.sequence([
            Animated.timing(this.state.logoOpacity,{
                toValue:1,
                duration:2000,
            }),
            Animated.timing(this.state.titleMarginTop,{
                toValue:10,
                duration:1000,
            }),
        ]).start(() => {

        })

    }
    render() {
        const { navigate } = this.props.navigation

        return(
            <TouchableWithoutFeedback onPress={() => navigate('Login')}>
             <View style={styles.container}>

            <Animated.Image source={require('./../../images/dating.jpg')}
                    style={{...styles.logo, opacity: this.state.logoOpacity}}>        
            </Animated.Image>
            <Animated.Text style={{...styles.logo, marginTop: this.state.titleMarginTop}}>
               {'   '} Welcome Dating Online App !
            </Animated.Text>

        </View>
        </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FDF5E6',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    logo:{
        height:200,
        width:200,
        borderRadius:100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title:{
        color:'red',
        marginTop:10,
        alignItems: 'center',
        fontSize:25,
    },
   
});