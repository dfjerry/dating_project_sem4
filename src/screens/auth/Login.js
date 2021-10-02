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
    Alert,
    AsyncStorage
    
 } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Login extends React.Component {
    componentDidMount = () =>{
        AsyncStorage.getItem('username').then((value) => this.setState({'username':value}));
        AsyncStorage.getItem('password').then((value) => this.setState({'password':value}));
    }

    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            username: "",
            password: "",
            inputUsername:"",
            inputPassword:"",
            showPassword: true,
        }
      }
      toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
      }

    checkLogin=() =>{
        const {inputUsername, inputPassword} = this.state;
        const myUsername = this.state.username;
        const myPassword = this.state.password;
        if(inputUsername == "" && inputPassword == ""){
            Alert.alert('Please fill the Username and Password');
        }
        else if(inputUsername == myUsername && inputPassword == myPassword){
            Alert.alert('Welcome' +' '+ inputUsername)
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
                        <Text style={{marginTop:10}}>Forgot your password? {' '}
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
                                    onChangeText={inputUsername => this.setState({inputUsername})}
                                
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
                                placeholder="Password"
                                placeholderTextColor="#00716F"
                                style={{paddingHorizontal:10,width: Dimensions.get('window').width / 1}}
                                onChangeText={inputPassword => this.setState({inputPassword})}
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

                        <View style={styles.loginFacebook}>
                            <Icon name="facebook-square" color="#ffffff" size={30} />
                            <Text style={styles.loginFacebooktext}>{' '}Login with Facebook</Text>
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
    loginFacebook:{
        width:Dimensions.get('window').width / 2,
        alignSelf:'center',
        marginTop:10,
        flexDirection:'row',
        backgroundColor:'#4267b2'
    },
    loginFacebooktext:{
        backgroundColor:'#4267b2',
        alignSelf:'center',
        fontSize:16,
        color:'#ffffff'

    },
   
});