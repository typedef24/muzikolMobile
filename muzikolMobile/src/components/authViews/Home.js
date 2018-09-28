import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Alert,
	BackHandler,
} from 'react-native';

import HomeView from './HomeView';
import Splash from '../views/Splash';
//logic here is to display splash if there is nothing on the state 
//hence when the api call has fetched something then display that thing

//still working on this home screen
class Home extends Component {

		state = {
			content: true,
		}
		//Todo
		//only show splash screen when making a request to the api
		//still need to know the sequence of activities(flow) from client.
		//taking client directly to login after install is wierd.

	componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            Alert.alert(
              'Exit App',
              'You are about to exit the application, are you sure?',
              [
                {text: 'OK', onPress: () => BackHandler.exitApp()},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              ]
            );
          });
    }

	render() {
		return (
		this.state.content ? <HomeView/>:<Splash/>
			
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default Home;