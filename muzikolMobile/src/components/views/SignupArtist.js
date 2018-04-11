import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    BackHandler, 
    TextField, 
    TouchableHighlight,
    Alert,
} from 'react-native';


export default class SignupArtist extends Component {

	state = {
		name = '',
		email = '',
		password = '',
		confirmPassword = '',
		gender = '',
		videoLink = '',

	}


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
			// const {name, email, password, confirmPassword, gender, videoLink} = this.state
			<View style={styles.container}>
				
				<TextField 
					placeHolder = "Name"
					required
					value={this.state.name}
					onChangeText = {(name) => this.setState({name}) }
				
				/>
				<TextField placeHolder = "email"
					required
					value={this.state.email}
					 keyboardType = "email-address"
					onChangeText = {(email) => this.setState({email}) } 
				/>

				<TextField placeHolder = "password"
					required
					value={this.state.password}
					secureTextEntry
                    autoCorrect={false}
					onChangeText = {(password) => this.setState({password}) } 
				/>

				<TextField placeHolder = " Confirm password"
					required
					value={this.state.confirmPassword}
					secureTextEntry
                    autoCorrect={false}
					onChangeText = {(confirmPassword) => this.setState({confirmPassword}) } 
				/>

				<TextField placeHolder = "Gender"
					required
					value={this.state.gender}
					onChangeText = {(gender) => this.setState({gender}) } 
				/>
				<TextField placeHolder = "Video Link"
					required
					value={this.state.videoLink}
					onChangeText = {(videoLink) => this.setState({videoLink}) } 
				/>

				<TouchableHighlight onPress={() => this.signupSubmit()}>
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
	    alignItems: 'center',
	    justifyContent: 'center',
	}
});

