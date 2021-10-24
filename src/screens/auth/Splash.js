import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    Animated,
    TouchableWithoutFeedback,
    
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Splash extends React.Component {
    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(500),
    }
    async componentDidMount() {
        Animated.sequence([
            Animated.timing(this.state.logoOpacity, {
                toValue: 1,
                duration: 1800,
            }),
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1800,
            }),
            
        ]).start(() => {

        })

    }
    render() {
        const { navigate } = this.props.navigation

        return (
            <TouchableWithoutFeedback onPress={() => navigate('LoginScreen')}>
                <View style={styles.container}>

                    <Animated.Image source={require('./../../images/dating.jpg')}
                        style={{ ...styles.logo, opacity: this.state.logoOpacity }}>
                    </Animated.Image>
                    <Animated.View style={{ ...styles.signIn, marginTop: this.state.titleMarginTop }}>
                    <Text style={styles.textSign}>
                         Get Started {' '}
                    </Text>
                    <Icon style={{marginRight:-10}} name='right' color='#ffffff' size={24}/>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF5E6',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        color: 'red',
        marginTop: 10,
        alignItems: 'center',
        fontSize: 20,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor:'#00716F'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        alignItems:'center',
        
        
    }
    

});