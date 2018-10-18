import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	BackHandler,
} from 'react-native';


class Notification extends Component {
	render(){
		return (
            <View style={styles.container}>
                <Text>Notification</Text>
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

export default Notification;