import React from 'react';
import { 
Platform,
StyleSheet,
Image, Text, View ,Button, Alert, StatusBar,
BackHandler
} from 'react-native';

import OnboardingView from './src/components/OnboardingView';
import Home from './src/components/authViews/Home';
import Settings from './src/components/authViews/Settings';
import Login from './src/components/views/Login';
import SignupArtist from './src/components/views/SignupArtist';
import ForgetPassword from './src/components/views/ForgetPassword';

import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

class App extends React.Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: '#555555' }} 
        tintColor='white'
        titleStyle={{ color: '#fff' }}>
        <Scene key="root">
          <Scene 
            key="onboarding"
            component={OnboardingView}
            hideNavBar={true}
            
          />
          <Scene
            key="home"
            component={Home}
            type={ActionConst.RESET}
            title="Muzikol"
            onRight={() => Actions.settings()}
            rightButtonImage={require('./src/assets/settings.png')}
            onLeft = {() => Actions.home()}
            leftButtonImage={require('./src/assets/user.png')}
            leftButtonIconStyle={{ alignItems: 'flex-start', height: 30, width: 30}}
          />

          <Scene
            key="login"
            component={Login}
            title="Log In"
            onRight={() => Actions.register()}
          />
          <Scene
            key="signup"
            component={SignupArtist}
            title="Already Have and account?."
            onRight={() => Actions.login()}
          />
          <Scene
            key="forgot_password"
            component={ForgetPassword}
            title="Forgot Password"
            onRight={() => Actions.login()}
          />

        <Scene
            key="settings"
            component={Settings}
            title="Settings"
            onRight={() => Actions.login()}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
export default  App;
