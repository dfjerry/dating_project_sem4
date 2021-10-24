import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, Dimensions, TextInput, StyleSheet, Picker} from "react-native";
import {Error} from "../components/Error";
import {Loading} from "../components/Loading";
import {useAuth} from "../hooks/useAuth";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import {BASE_URL} from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createAction} from "../utils/createAction";
import {AuthContext} from "../context/AuthContext";


export const EditUser = ({navigation}) => {
    const {state} = useAuth();
    const {setUserUpdate} = React.useContext(AuthContext);
    const [user, setUser] = useState(state?.user)
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const handleChange = (e, name) => {
        let newUser = {...user}
        newUser[name] = e;
        setUser(newUser);
    }
    const submitForm = async (e) => {
        await axios.put(`${BASE_URL}/api/users/update/`, user).then((res) => {
            if (res.status == "200") {
                setUserUpdate(user);
                alert('Cập nhật thành công');
                navigation.navigate('Profile');
            }
        }).catch((err) => {
            alert('Cập nhật thất bại', err)
        })
    }
    useEffect(() => {
        setUser(state.user)
    }, [state]);
    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.topView}>
                <ImageBackground
                    source={require('../images/image.jpg')}
                    style={{
                        height: Dimensions.get('window').height / 2.5,
                    }}
                >
                </ImageBackground>
            </View>
            <Error error={error}/>
            <View style={styles.bottomView}>
                <View style={{padding: 40}}>
                    <View style={{
                        alignSelf: 'flex-start',
                        marginBottom: 20
                    }}>
                        <Text style={{fontSize: 20}}>Change profile</Text>

                    </View>
                    <Text>First name</Text>
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
                            placeholderTextColor="#00716F"
                            style={{paddingHorizontal: 10, width: Dimensions.get('window').width / 1}}
                            value={user?.first_name}
                            onChangeText={(e) => handleChange(e, 'first_name')}
                        />
                    </View>
                    <Text>Last name</Text>
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
                            value={user?.last_name}
                            onChangeText={(e) => handleChange(e, 'last_name')}
                            placeholderTextColor="#00716F"
                            style={{paddingHorizontal: 10, width: Dimensions.get('window').width / 1}}
                        />
                    </View>
                    <Text>Bio</Text>
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
                            value={user?.bio}
                            onChangeText={(e) => handleChange(e, 'bio')}
                            placeholderTextColor="#00716F"
                            style={{paddingHorizontal: 10, width: Dimensions.get('window').width / 1}}
                        />
                    </View>
                    <Text>Abouts</Text>
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
                            value={user?.details}
                            onChangeText={(e) => handleChange(e, 'details')}
                            placeholderTextColor="#00716F"
                            style={{paddingHorizontal: 10, width: Dimensions.get('window').width / 1}}
                        />
                    </View>
                    <Text>Gender</Text>
                    <View style={{
                        alignItems: "center",
                        flex: 1
                    }}>
                        <Picker
                            style={{width: 300, marginTop: 0, padding: 0, height: 100, marginLeft: 0}}
                            selectedValue={user?.gender}
                            onValueChange={(e) => handleChange(e, 'gender')}
                        >
                            <Picker.Item label="Nam" value="1" />
                            <Picker.Item label="Nữ" value="2" />
                            <Picker.Item label="Khác" value="3" />
                        </Picker>
                    </View>

                    <View style={{
                        marginHorizontal:55,
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:200,
                        backgroundColor:"#00716F",
                        paddingVertical:10,
                        borderRadius:23
                    }}>
                        <Text style={{
                            color:"white",
                        }}
                              onPress={submitForm}
                        >Save</Text>
                    </View>
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
        flex: 10,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        backgroundColor: '#FDF5E6',
    },


});