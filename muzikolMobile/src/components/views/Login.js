import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput,
    TouchableOpacity, 
    TouchableWithoutFeedback,
    BackHandler,
    AsyncStorage    
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import InputRound  from './../../components/commons/InputRound';
import ButtonRound  from './../../components/commons/ButtonRound';
import helper  from './../../api/helper';


class Login extends Component {

    state = {
        username: '',
        password: '',
        error: false, 
        loggedIn: false,
        procesing: false
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    }
    componentDiMount(){
        helper.get('http://localhost/sayo/api/web/v1/beforeauths/trendingmusic').then(data=>{
            console.log("result"+JSON.stringify(data))
        }).catch(err => {
            console.log("error"+ err.message)
        });
    }

    login( ){
        // helper.getSongs('http://localhost/sayo/api/web/v1/beforeauths/trendingmusic').then(data=>{
        //     console.log("result"+JSON.stringify(data))
        // }).catch(err => {
        //     console.log("error"+ err.message)
        // });
        this.setState({ procesing: !this.state.procesing });

        const { username, password } = this.state;
        const body = {
            "username": username,
            "password": password,
          };
        helper.post('http://localhost/sayo/api/web/v1/beforeauths/login', body)
            .then((response) => response.json())
            .then((responseJson) => {
                //save the api key to async storage
                this.setState({ procesing: false });
                console.log(responseJson)
                Actions.home();
            })
            .catch((error) => {
                this.setState({ procesing: false });
                // Handle error here...
                this.setState({
                    email: '',
                    password: '',
                    error: true
                })
              console.error(error);
            });

    }

    //Todo Create forget_password Screen
    //create signup Screen
render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.loginContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.logoStyle}
                            source={require('../../assets/main_logo.png')}
                        />
                    </View>
                    <InputRound 
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                      placeholder = "Username"
				        returnKeyType='next'
				        onSubmitEditing = { ()=> this.passwordInput.focus()}
				        keyboardType = "email-address"
				        placeholderTextColor = 'rgba(255,255,255,0.2)'
				        value={this.state.username}
                        onChangeText={(username) => this.setState({ username, error: false })}
                    />
                    <InputRound
                        underlineColorAndroid = 'rgba(0,0,0,0)'
			            placeholder="password" 
						secureTextEntry
          				returnKeyType='go'
         				ref={(input)=> this.passwordInput = input}
         				placeholderTextColor = 'rgba(255,255,255,0.2)'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    {
                        this.state.error ? 
                        <Text style={styles.errStyle}>Wrong credentials. Please verify and try again</Text>
                        : <Text></Text>
                    }

                    <ButtonRound text="Login"
                        onPress={() => this.login()}>
                    </ButtonRound>

                    
                    <TouchableOpacity onPress={() => Actions.forgot_password()}>
                        <Text style={styles.textStyle}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => Actions.signup()}>
                        <Text style={styles.textStyle}>No account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Spinner visible={this.state.procesing} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555555',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    loginContainer: {
        flex: 3,
        justifyContent: 'center',
        marginLeft: 25,
        marginRight: 25
    },
    
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errStyle: {
        fontWeight: '700',
        color: '#F6921E', 
        fontSize: 12,
        textAlign: 'center'
    },

    logoStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#fff', 
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 5
    },


});

export default Login;