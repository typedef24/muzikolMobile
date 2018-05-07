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

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: false, 
        loggedIn: false,
        procesing: false
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    }

    login() {
        this.setState({ procesing: !this.state.procesing });
        const { email, password } = this.state;
        Actions.home();
        //carry out login task here
    }

    //Todo Create forget_password Screen
    //create signup Screen
render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.loginContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../assets/main_logo.png')}
                        />
                    </View>
                    <TextInput style={styles.input}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                      placeholder = "Username"
				        returnKeyType='next'
				        onSubmitEditing = { ()=> this.passwordInput.focus()}
				        keyboardType = "email-address"
				        placeholderTextColor = 'rgba(255,255,255,0.2)'
				        value={this.state.username}
                        onChangeText={(email) => this.setState({ email, error: false })}
                    />
                    <TextInput style = {styles.input}
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

                    <TouchableOpacity onPress={() => this.login()}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => Actions.forgot_password()}>
                        <Text style={styles.textStyle}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => Actions.signup()}>
                        <Text style={styles.textStyle}>Don't have an account? Sign Up</Text>
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
    input:{
        width:300,
        borderRadius: 25,
        fontSize: 16,
	    height:40,
	    alignSelf: 'center',
	    backgroundColor: 'rgba(255,255,255,0.3)',
	    color: '#FFF',
        paddingTop: 10,
	    paddingHorizontal: 16,
        marginVertical: 10,
	},
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    errStyle: {
        fontWeight: '700',
        color: '#F6921E', 
        fontSize: 12,
        textAlign: 'center'
    },

    imageStyle: {
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
    button: {
        width:300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10,
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
         textAlign: 'center',
    },


});

export default Login;