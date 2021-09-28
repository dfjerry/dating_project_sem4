import React from "react";
import {Switch, Text, Button, View, TextInput, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { ButtonGroup } from "react-native-elements/dist/buttons/ButtonGroup";
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
          showPassword: true,
        }
      }
    
      toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
      }
    render() {

        const { navigate } = this.props.navigation
        return (
            <View
                style={{ flex: 1, backgroundColor: '#ffffff' }}
                showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={require('./../../images/dating.jpg')}
                    style={{
                        height: Dimensions.get('window').height / 2.5,
                    }}>
                    
                </ImageBackground>
                <View style={styles.bottomView}>
                    <View style={{ padding: 40 }}>
                        <Text style={{ color: '#4632A1',fontSize:20 }}>Welcome !</Text>
                        <Text style={{marginTop:10}}>Don't have an account? {' '}
                            <Text onPress={() => navigate('Register')}
                                style={{ color: 'red', fontStyle: 'italic' }}>Create new account {' '}</Text>
                           
                        </Text>
                        <Text>Forgot your password? {' '}
                        <Text onPress={() => navigate('Forgotten_Password')}
                                style={{ color: 'red', fontStyle: 'italic' }}>Forgotten Password</Text>
                        </Text>
                        
                        <View style={{ marginTop: 20 }}>

                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginHorizontal: 10,
                                borderWidth: 2,
                                paddingHorizontal: 10,
                                borderColor: "#00716F",
                                borderRadius: 23,
                                paddingVertical: 2
                            }}>
                                <Icon name="user" color="#00716F" size={24} />
                                <TextInput
                                    placeholder="UserName"
                                    placeholderTextColor="#00716F"
                                    style={{paddingHorizontal:10,width: Dimensions.get('window').width / 1}}
                                />
                            </View>

                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginHorizontal: 10,
                                borderWidth: 2,
                                marginTop: 15,
                                paddingHorizontal: 10,
                                borderColor: "#00716F",
                                borderRadius: 23,
                                paddingVertical: 2
                            }}>
                                <Icon name="eye" color="#00716F" size={24} onPress={this.toggleSwitch} value={!this.state.showPassword}/>
                                <TextInput
                                secureTextEntry={this.state.showPassword}
                                onChangeText={(password) => this.setState({ password })}
                                placeholder="Password"
                                placeholderTextColor="#00716F"
                                style={{paddingHorizontal:10,width: Dimensions.get('window').width / 1}}
                                />
                            </View>
                            
                        </View>
                        
                        
                        <View style={{height:50, width:Dimensions.get('window').width / 2, alignSelf:'center', marginTop:30}}>
                        <Button
                            color='#00716F'
                            title="Login"
                            onPress={() => navigate('Home')}
                        />
                        </View>
                    </View>
                    
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    
    bottomView: {
        flex: 1.5,
        height: Dimensions.get('window').height,
        backgroundColor: '#FDF5E6',
        bottom: 50,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
   
});