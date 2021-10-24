import React from "react";
import {Text, 
    Button, 
    View, 
    TextInput, 
    ImageBackground,
    StyleSheet, 
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    Alert} from 'react-native';


export default class Register extends React.Component {

    
    render() {
        const { navigate } = this.props.navigation
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}
                showsVerticalScrollIndicator={false}>
                <View style={styles.topView}>
                    <ImageBackground
                        source={require('./../../images/dating.jpg')}
                        style={{height: Dimensions.get('window').height / 2.5,
                    }}>
                        <View >
                        {/*    style={styles.brandView}*/}
                        <Text >Dating Online</Text>
                        {/*    style={styles.brandViewText}*/}
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ padding: 40 }}>
                        <View style={{
                            alignSelf:'flex-start',
                            marginTop:-20
                        }}>
                            <Text style={{fontSize:20}}>Retrieve Password</Text>
                            <Text style={{fontSize:14}}>Enter your registered email </Text>

                        </View>

                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginHorizontal: 10,
                            borderWidth: 2,
                            marginTop: 10,
                            paddingHorizontal: 10,
                            borderColor: "#00716F",
                            borderRadius: 23,
                            paddingVertical: 2
                        }}>
                            <TextInput
                                keybroadType="email-address"
                                placeholder="Email"
                                placeholderTextColor="#00716F"
                                style={{ paddingHorizontal: 10, width: Dimensions.get('window').width / 1 }}
                            />
                        </View>

                        <View style={{height:50, width:Dimensions.get('window').width / 2, alignSelf:'center', marginTop:20}}>
                        <Button
                            color='#00716F'
                            title="Send"
                            onPress={() => navigate('Login')}
                        />
                        </View>
                       

                        <Text style={{alignSelf:'center'}}>
                            <Text onPress={() => navigate('Login')}
                                style={{ color: 'red', fontStyle: 'italic',fontSize:18 }}>Login {' '}</Text>
                           <Text onPress={() => navigate('Register')}
                                style={{ color: 'red', fontStyle: 'italic',fontSize:18 }}>Register {' '}</Text>
                           
                        </Text>
                    </View>
                  
                </View>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    topView:{
        flex: 4,
        flexDirection: 'column',

    },
    
    bottomView: {
        flex: 6,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        backgroundColor: '#FDF5E6',
        bottom: 50,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },



});