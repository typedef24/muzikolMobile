import React, { Component } from 'react';
import {
	View,
	Text,
	BackHandler,
	StyleSheet,
} from 'react-native';

class ForgetPassword extends Component {

	
	render() {
		return (
			<View> 
				<Text> ForgetPassword </Text>
				<Text> I don't yet know how to help you </Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex:1,
	},
});

export default ForgetPassword;