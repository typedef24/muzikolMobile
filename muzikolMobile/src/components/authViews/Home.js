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
import HttpRequest  from './../../api/HttpRequest';

//logic here is to display splash if there is nothing on the state 
//hence when the api call has fetched a then display that thing. 

//still working on this home screen
class Home extends Component {

		state = {
			content: true,
			contentdata: '',
		}
		//Todo
		//only show splash screen when making a request to the api
		//still need to know the sequence of activities(flow) from client.
		//taking client directly to login after install is wierd.
	componentDidMount(){
		HttpRequest.get('http://localhost/sayo/api/web/v1/beforeauths/trendingmusic')           .then((response) => response.json())
            .then((responseJson) => {
                //save the api key to async storage
                this.setState({ procesing: false });

                this.setState({ contentdata: responseJson });

                console.log(this.state.contentdata);

               // Actions.home();
            })
           .catch(err => {
            console.log("error"+ err.message)
        });

	}

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
		this.state.content ? <HomeView songs={this.state.contentdata}/>:<Splash/>
			
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