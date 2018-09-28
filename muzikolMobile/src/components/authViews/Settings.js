import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	BackHandler,
} from 'react-native';


class Settings extends Component {
	render(){
		return (
            <View style={styles.container}>
                <Text>Settings</Text>
            </View>
        );
	}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Settings;