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
 } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {AuthContext} from '../../context/AuthContext';
import {Error} from '../../components/Error';
import {Loading} from '../../components/Loading';
import {Entypo} from "@expo/vector-icons";

export default function Login({navigation}) {

    const {login} = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('tuan2');
    const [password, setPassword] = React.useState('tuan2');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}
                  showsVerticalScrollIndicator={false}>
                <View style={styles.topView}>
                    <ImageBackground
                        source={require('./../../images/image.jpg')}
                        style={{
                            height: Dimensions.get('window').height / 2.5,
                        }}>
                    </ImageBackground>
                </View>
                <Error error={error} />
                <View style={styles.bottomView}>
                    <View style={{ padding: 40 }}>
                        <Text style={{ color: '#4632A1',fontSize:20 }}>Welcome !</Text>
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
                                    value={email}
                                    onChangeText={setEmail}
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
                                <Entypo name="lock" size={24} color="black" />
                                <TextInput
                                    secureTextEntry
                                    placeholder="Password"
                                    placeholderTextColor="#00716F"
                                    style={{paddingHorizontal:10,width: Dimensions.get('window').width / 1}}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                            </View>

                        </View>
                        <View style={{
                            marginHorizontal:55,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:30,
                            backgroundColor:"#00716F",
                            paddingVertical:10,
                            borderRadius:23
                        }}>
                            <Text style={{
                                color:"white",
                            }}
                                  onPress={async () => {
                                      try {
                                          setLoading(true);
                                          await login(email, password);
                                          setLoading(false);
                                      } catch (e) {
                                          setError(e.message);
                                          setLoading(false);
                                      }
                                  }}
                            >Login</Text>
                        </View>
                        <Text
                            onPress={() => {
                                navigation.navigate('Register');
                            }}
                            style={{
                                alignSelf:"center",
                                color:"#00716F",
                                paddingVertical:30
                            }}>Don't have an account? Create new user</Text>
                    </View>

                </View>
                <Loading loading={loading} />
            </View>
        </TouchableWithoutFeedback>
    )
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
    loginFacebookText:{
        backgroundColor:'#4267b2',
        alignSelf:'center',
        fontSize:16,
        color:'#ffffff'

    },

});