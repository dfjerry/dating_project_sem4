import React from "react";
import {
    Switch,
    Text, 
    Button, 
    View, 
    TextInput, 
    ImageBackground, 
    StyleSheet, 
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
 } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { ButtonGroup } from "react-native-elements/dist/buttons/ButtonGroup";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            username: "",
            password: "",
            showPassword: true,
        }
      }
      toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
      }

    checkLogin=() =>{
        const {username, password} = this.state;
        if(username == "" && password == ""){
            Alert.alert('Please fill the Username and Password');
        }
        else if(username == "admin" && password == "admin"){
            Alert.alert('Welcome' +' '+ username)
            this.props.navigation.navigate("Profile")
        }
        else{
            Alert.alert('Data not found');
        }
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
                    style={{
                        height: Dimensions.get('window').height / 2.5,
                    }}>
                </ImageBackground>
                </View>
                
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
                                    onChangeText={username => this.setState({username})}
                                
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
                                onChangeText={password => this.setState({password})}
                                />
                            </View>
                            
                        </View>
                        
                        
                        <View style={{ width:Dimensions.get('window').width / 2, alignSelf:'center', marginTop:30}}>
                        <Button
                            color='#00716F'
                            title="Login"
                            onPress={this.checkLogin}
                        />
                    
                        </View>
                        <View style={{ width:Dimensions.get('window').width / 2, alignSelf:'center', marginTop:15}}>
                        
                        <Button
                        backgroundColor='#3b5998'
                        title="Login with Facebook"
                        />
                        </View>
                        
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
    loginButtonTitle:{
        fontSize:18,
        color: 'white'
    },
   
});