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
import {AuthContext} from "../../context/AuthContext";
import {Loading} from "../../components/Loading";
import {Error} from "../../components/Error";
import {AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";

export default function Register({navigation}) {
    const {register} = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('tuantuna@gmail.com');
    const [userName, setUserName] = React.useState('tuantuna');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const valid = () => {
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        const emailRegex = /^[A-Za-z0-9_.]{3,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!usernameRegex.test(String(userName).toLowerCase())){
            alert('Username không đúng định dạng');
            return false;
        }
        if (!emailRegex.test(String(email).toLowerCase())){
            alert('Email không dúng định dạng');
            return false;
        }
        if (!passwordRegex.test(String(password))){
            alert('Password bao gồm tám ký tự (ít nhất một chữ cái và một số');
            return false;
        }
        return true;
    }
    const registerCheck = async (e) => {
        if (valid()){
            try {
                setLoading(true);
                await register(userName, password, email);
                navigation.pop();
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        }
    }
    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.topView}>
                <ImageBackground
                    source={require('./../../images/image.jpg')}
                    style={{
                        height: Dimensions.get('window').height / 2.5,
                    }}
                >
                    {/*<View style={styles.brandView}>*/}
                    {/*    <Text style={styles.brandViewText}>Dating Online</Text>*/}
                    {/*</View>*/}
                </ImageBackground>
            </View>
            <Error error={error}/>
            <View style={styles.bottomView}>
                <View style={{padding: 40}}>
                    <View style={{
                        alignSelf: 'flex-start',
                        marginTop: -20
                    }}>
                        <Text style={{fontSize: 20}}>Sign Up</Text>

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
                        <MaterialIcons name="email" size={24} color="#00716F"/>
                        <TextInput
                            placeholderTextColor="#00716F"
                            style={{paddingHorizontal: 10, width: Dimensions.get('window').width / 1}}
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    {/*<View style={{*/}
                    {/*    flexDirection: "row",*/}
                    {/*    alignItems: "center",*/}
                    {/*    marginHorizontal: 10,*/}
                    {/*    borderWidth: 2,*/}
                    {/*    marginTop: 10,*/}
                    {/*    paddingHorizontal: 10,*/}
                    {/*    borderColor: "#00716F",*/}
                    {/*    borderRadius: 23,*/}
                    {/*    paddingVertical: 2*/}
                    {/*}}>*/}
                    {/*    <AntDesign name="user" size={24} color="black"/>*/}
                    {/*    <TextInput*/}
                    {/*        value={userName}*/}
                    {/*        onChangeText={setUserName}*/}
                    {/*        placeholder="User name"*/}
                    {/*        placeholderTextColor="#00716F"*/}
                    {/*        style={{paddingHorizontal: 10, width: Dimensions.get('window').width / 1}}*/}
                    {/*    />*/}
                    {/*</View>*/}
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
                        <Entypo name="lock" size={24} color="black" />
                        <TextInput
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor="#00716F"
                            style={{paddingHorizontal: 10, width: Dimensions.get('window').width / 1}}
                            value={password}
                            onChangeText={setPassword}
                        />
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
                              onPress={registerCheck}
                        >Sign up</Text>
                    </View>

                    <Text style={{alignSelf: 'center',  color:"#00716F",   paddingVertical:30}}>
                        <Text onPress={() => {
                            navigation.navigate('Register');
                        }}
                        >Already account ? {' '} Login {' '}</Text>
                    </Text>
                </View>
                <Loading loading={loading}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    topView: {
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