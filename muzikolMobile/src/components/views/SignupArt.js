import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    StyleSheet, 
    BackHandler, 
    TouchableOpacity,
    Alert,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import InputRound  from './../../components/commons/InputRound';
import ButtonRound  from './../../components/commons/ButtonRound';
import helper  from './../../api/helper';
import HttpRequest  from './../../api/HttpRequest';




 class SignupArt extends Component {

	state = {
		name : '',
		username: '',
		email : '',
		password : '',
		confirmPassword : '',
		phone_number: '',
		artisttype: '',
		videoLink : '',
		procesing: false,
		error: false,

	};



	signupSubmit( ){
        this.setState({ procesing: !this.state.procesing });
        
        const { username, password, name, email, phone_number, videoLink, artisttype } = this.state;

        const body = JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "name": name,
            "artisttype": artisttype,
            "phone_number": phone_number,
            "videoLink": videoLink,

          });

        HttpRequest.post('http://localhost/sayo/api/web/v1/beforeauths/signupartist', body)
			.then((response) => response.json())
            .then((responseJson) => {
                // todo save the api key and muzikol userdata  to async storage
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
              		Alert.alert(
              'Account creation error',
              'your account creation encountered the following error?'+error.message,

            );
            });

    }

	render() {
		return (
			<View style={styles.container}>
				
				<View style={styles.loginContainer}>

						<InputRound 
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                      placeholder = "Name"
					        returnKeyType='next'
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.name}
	                        onChangeText={(name) => this.setState({ name, error: false })}
	                    />

	                    <InputRound
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                      placeholder = "User Name"
					        returnKeyType='next'
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.username}
	                        onChangeText={(username) => this.setState({ username, error: false })}
	                    />

	                    <InputRound
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                      placeholder = "Email"
					        returnKeyType='next'
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.email}
	                        onChangeText={(email) => this.setState({ email, error: false })}
	                    />

	                    <InputRound
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                        placeholder = "Password"
	                        secureTextEntry
					        returnKeyType='next'
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.password}
	                        onChangeText={(password) => this.setState({ password, error: false })}
	                    />

	                    <InputRound
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                        placeholder = "Confirm Password"
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.confirmPassword}
					        secureTextEntry
	          				returnKeyType='next'
	                        onChangeText={(confirmPassword) => this.setState({ confirmPassword, error: false })}
	                    />

	                    <InputRound
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                        placeholder = "Phone Number"
					        keyboardType = "phone-pad"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.phone_number}
	          				returnKeyType='next'
	                        onChangeText={(phone_number) => this.setState({ phone_number, error: false })}
	                    />

	                    <InputRound
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                        placeholder = "Artist Type"
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.artisttype}
	          				returnKeyType='next'
	                        onChangeText={(artisttype) => this.setState({ artisttype, error: false })}
	                    />

	                    <InputRound
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                        placeholder = "Popular Work Link "
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.videoLink}
	          				returnKeyType='done'
	                        onChangeText={(videoLink) => this.setState({ videoLink, error: false })}
	                    />
	                    <ButtonRound text="Create Account"
                        	onPress={() => this.signupSubmit()}>
                  		</ButtonRound>

	                    <Spinner visible={this.state.procesing} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#555555',
    },
	loginContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 25,
        marginRight: 25
    },

    
   
});

export default SignupArt;