
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    StatusBar,
    BackHandler,
    Image,
    AsyncStorage
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Actions } from 'react-native-router-flux';

import Login from './views/Login';

class OnboardingView extends Component {
    constructor() {
        super();
        this.state = { firstTimeInstall: null };
        AsyncStorage.getItem("alreadyInstalled").then(value => {
            if(JSON.parse(value) == null){
                 AsyncStorage.setItem('alreadyInstalled', JSON.stringify(true));
                 this.setState({ firstTimeInstall: true });
            }
            else{
                 this.setState({ firstTimeInstall: false });
            }});
    }

    

    componentWillMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    };


    render() {
        if(this.state.firstTimeInstall === null){
            return null; //this means asyncStorage is not working. Danger
        } else if(this.state.firstTimeInstall == true){
            return (
                <Onboarding
                    pages={[
                        {
                            backgroundColor: '#330d00',
                            image: <Image source={require('../assets/onboarding.png')} style={{ height: 100, width: 100}}/>,
                            title: 'Muzikol',
                            subtitle: "Music For life, @abboh?",
                        },
                        
                    ]}
                    onSkip={() => Actions.login()}
                    onDone={() => Actions.login()}
                />
            );
        } else{
            //take the user back to the login page
            return <Login />
        }
    }
}

export default OnboardingView;