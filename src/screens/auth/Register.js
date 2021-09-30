import React from "react";
import {
    Text, 
    Button, 
    View, 
    TextInput, 
    ImageBackground,
    StyleSheet, 
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    AsyncStorage,
 } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component {
    componentDidMount = () =>{
        AsyncStorage.getItem('username').then((value) => this.setState({'username':value}));
        AsyncStorage.getItem('password').then((value) => this.setState({'password':value}));
        AsyncStorage.getItem('name').then((value) => this.setState({'name':value}));
        AsyncStorage.getItem('email').then((value) => this.setState({'email':value}));
    }
    setUsername = (value) => {
        AsyncStorage.setItem('username', value);
        this.setState({'username':value});
    }

    setPassword = (value) => {
        AsyncStorage.setItem('password', value);
        this.setState({'password':value});
    }
    setName = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({'name':value});
    }

    setEmail = (value) => {
        AsyncStorage.setItem('email', value);
        this.setState({'email':value});
    }

    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            username: "",
            password: "",
            name:"",
            email:"",
            showPassword: true,
        }
    }

    toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
    }
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
                        <View style={styles.brandView}>
                        <Text style={styles.brandViewText}>Dating Online</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ padding: 40 }}>
                        <View style={{
                            alignSelf: 'flex-start',
                            marginTop: -20
                        }}>
                            <Text style={{ fontSize: 20 }}>Sign Up</Text>
                            <Text style={{ fontSize: 14 }}>It's quick and easy.</Text>

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
                            <Icon name="user" color="#00716F" size={24} />
                            <TextInput
                                value={this.state.username}
                                placeholder="UserName"
                                placeholderTextColor="#00716F"
                                style={{ paddingHorizontal: 10, width: Dimensions.get('window').width / 1 }}
                                onChangeText={this.setUsername}
                            />
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
                            <Icon name="eye" color="#00716F" size={24} onPress={this.toggleSwitch} value={!this.state.showPassword}/>
                            <TextInput
                                value={this.state.password}
                                secureTextEntry={this.state.showPassword}
                                onChangeText={(password) => this.setState({ password })}
                                placeholder="Password"
                                placeholderTextColor="#00716F"
                                style={{ paddingHorizontal: 10, width: Dimensions.get('window').width / 1 }}
                                onChangeText={this.setPassword}
                            />
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
                            <Icon name="aliwangwang-o1" color="#00716F" size={24} onPress={this.toggleSwitch} value={!this.state.showPassword}/>
                            <TextInput
                                value={this.state.name}
                                onChangeText={(name) => this.setState({ name })}
                                placeholder="Name"
                                placeholderTextColor="#00716F"
                                style={{ paddingHorizontal: 10, width: Dimensions.get('window').width / 1 }}
                                onChangeText={this.setName}
                            />
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
                            <Icon name="mail" color="#00716F" size={24} />
                            <TextInput
                                value={this.state.email}
                                keybroadType="email-address"
                                placeholder="Email"
                                placeholderTextColor="#00716F"
                                style={{ paddingHorizontal: 10, width: Dimensions.get('window').width / 1 }}
                                onChangeText={this.setEmail}
                            />
                        </View>

                        <View style={{ height: 50, width: Dimensions.get('window').width / 2, alignSelf: 'center', marginTop: 20 }}>
                            <Button
                                color='#00716F'
                                title="Sign Up"
                                onPress={() => navigate('Login')}
                            />
                        </View>


                        <Text style={{ alignSelf: 'center' }}>Already account ? {' '}
                            <Text onPress={() => navigate('Login')}
                                style={{ color: 'red', fontStyle: 'italic', fontSize: 18 }}>Login {' '}</Text>

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