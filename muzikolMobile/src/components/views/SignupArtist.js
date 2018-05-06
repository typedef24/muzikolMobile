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

 class SignupArtist extends Component {

	state = {
		firstName : '',
		lastName: '',
		email : '',
		password : '',
		confirmPassword : '',
		gender : '',
		videoLink : '',
		procesing: false,

	};


	signupSubmit(){
		//todo
		//process the api call for creating account and finish the necessary logic

		//for now just display procesing and then give an alert to the user 
		this.setState({ procesing: !this.state.procesing });
		Alert.alert(
              'Subfmit Progress',
              'Your submit is in Progress?',
              // [
              //   {text: 'OK', onPress: () => BackHandler.exitApp()},
              //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              // ]
            );
	}
	render() {
		return (
			<View style={styles.container}>
				
				<View style={styles.loginContainer}>

						<TextInput style={styles.input}
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                      placeholder = "First Name"
					        returnKeyType='next'
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.firstName}
	                        onChangeText={(firstName) => this.setState({ firstName, error: false })}
	                    />

	                    <TextInput style={styles.input}
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                      placeholder = "Last Name"
					        returnKeyType='next'
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.lastName}
	                        onChangeText={(lastName) => this.setState({ lastName, error: false })}
	                    />

	                    <TextInput style={styles.input}
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                      placeholder = "Email"
					        returnKeyType='next'
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.email}
	                        onChangeText={(email) => this.setState({ email, error: false })}
	                    />

	                    <TextInput style={styles.input}
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                        placeholder = "Password"
	                        secureTextEntry
					        returnKeyType='next'
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.password}
	                        onChangeText={(password) => this.setState({ password, error: false })}
	                    />

	                    <TextInput style={styles.input}
	                        underlineColorAndroid = 'rgba(0,0,0,0)'
	                        placeholder = "Confirm Password"
					        keyboardType = "email-address"
					        placeholderTextColor = 'rgba(255,255,255,0.2)'
					        value={this.state.confirmPassword}
					        secureTextEntry
	          				returnKeyType='go'
	                        onChangeText={(confirmPassword) => this.setState({ confirmPassword, error: false })}
	                    />

	                    <TouchableOpacity onPress={() => this.signupSubmit()}>
	                        <View style={styles.button}>
	                            <Text style={styles.text}>Create Account</Text>
	                        </View>
	                    </TouchableOpacity>

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
    input:{
	    width:300,
	    borderRadius: 25,
	    fontSize: 16,
	    height:40,
	    alignSelf: 'center',
	    backgroundColor: 'rgba(255,255,255,0.3)',
	    color: '#FFF',
	    paddingHorizontal: 16,
	    marginVertical: 10,
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

export default SignupArtist;