import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    BackHandler, 
    TouchableHighlight,
    Alert,
} from 'react-native';

import { TextField } from 'react-native-material-textfield';

 class SignupArtist extends Component {

	state = {
		name : '',
		email : '',
		password : '',
		confirmPassword : '',
		gender : '',
		videoLink : '',

	};


	signupSubmit(){
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
				
				<TextField 
					label='Name'
					required
					value={this.state.name}
					onChangeText = {(name) => this.setState({name}) }
				
				/>
				<TextField 
					label='Email'
					required
					value={this.state.email}
					 keyboardType = 'email-address'
					onChangeText = {(email) => this.setState({email}) } 
				/>

				<TextField 
					label='Password'
					required
					value={this.state.password}
					secureTextEntry
                    autoCorrect={false}
					onChangeText = {(password) => this.setState({password}) } 
				/>

				<TextField 
					label='Confirm Password'
					required
					value={this.state.confirmPassword}
					secureTextEntry
                    autoCorrect={false}
					onChangeText = {(confirmPassword) => this.setState({confirmPassword}) } 
				/>

				<TextField 
					label='Gender'
					required
					value={this.state.gender}
					onChangeText = {(gender) => this.setState({gender}) } 
				/>
				<TextField 
					textColor='#fff'
                    tintColor='#fff'
                    baseColor='#DEDEDE'
					label='Video Link'
					required
					value={this.state.videoLink}
					onChangeText = {(videoLink) => this.setState({videoLink}) } 
				/>


				<TouchableHighlight onPress={() => this.signupSubmit()} >
					<Text> SignUp </Text>
				</TouchableHighlight>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 25,
        marginRight: 25
    },
});

export default SignupArtist;