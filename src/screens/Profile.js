import React from "react";
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    Text,
    ScrollView,
    AsyncStorage,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            name:"",
            email:"",
        }
    }
    componentDidMount = () =>{
        AsyncStorage.getItem('username').then((value) => this.setState({'username':value}));
        AsyncStorage.getItem('password').then((value) => this.setState({'password':value}));
        AsyncStorage.getItem('name').then((value) => this.setState({'name':value}));
        AsyncStorage.getItem('email').then((value) => this.setState({'email':value}));
    }

    render() {

        const { navigate } = this.props.navigation
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}
                showsVerticalScrollIndicator={false}>
                <Image
                    source={require('./../images/avartar1.jpg')}
                    style={styles.avartar}

                />
                <View style={styles.title}>
                    <Text style={styles.title}>{this.state.name}</Text>
                    <Text style={styles.caption}>@{this.state.username}</Text>
                </View>
                <View style={styles.userInfo}>
                    <View style={styles.row}>
                        <Icon name="enviromento" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>Ha Noi, VietNam</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>+84 987654321</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="mail" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>{this.state.email}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="calendar" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>03-06-1996</Text>
                    </View>
                    
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}>
                       
                    </View>
                    <View style={styles.infoBox}>
                       
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                        <View style={styles.menuItem}>
                            <Icon name="edit" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText} >Edit profile</Text>
                        </View>
                       
                        <View style={styles.menuItem}>
                            <Icon name="wechat" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText} onPress={() => navigate('Chat')}>Chat</Text>
                        </View>

                        <View style={styles.menuItem}>
                            <Icon name="customerservice" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Support</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Icon name="setting" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Settings</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Icon name="infocirlceo" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>About</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Icon name="logout" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText} onPress={() => navigate('Login')}>Logout</Text>
                        </View>
                </View>
            </ScrollView>




        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    avartar: {
        marginTop: 30,
        height: 200,
        width: 200,
        borderRadius: 100,
        alignSelf: 'center'
    },
    userInfo: {
        paddingHorizontal: 30,
        marginBottom: 25,
        marginTop: 10
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop:5,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },

});