import React from 'react';
import { 
Platform,
StyleSheet,
Image, Text, View ,Button, Alert, StatusBar,
BackHandler
} from 'react-native';

import OnboardingView from './src/components/OnboardingView';
import Home from './src/components/authViews/Home';
import Chat from './src/components/authViews/Chat';
import Profile from './src/components/authViews/Profile';
import Notification from './src/components/authViews/Notification';
import Play from './src/components/authViews/Play';
import Settings from './src/components/authViews/Settings';
import Login from './src/components/views/Login';
import SignupArtist from './src/components/views/SignupArtist';
import SignupArt from './src/components/views/SignupArt';
import ForgetPassword from './src/components/views/ForgetPassword';

import { Router, Scene, ActionConst, Tabs, Actions } from 'react-native-router-flux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

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
            tabs={true} 
            hideNavBar={true} 
            tabBarStyle={styles.navigationTabBar} 
            hideBackImage={true} onRight={() => Actions.settings()}
            rightButtonImage={require('./src/assets/settings.png')}
            onLeft = {() => Actions.home()}
            leftButtonImage={require('./src/assets/user.png')}
            leftButtonIconStyle={{ alignItems: 'flex-start', height: 30, width: 30}}
          >
                    <Scene
                      key="home1"
                      initial={true}
                      component={Home}
                      type={ActionConst.RESET}
                      title="Muzikol"
                      icon={TabIcon}
                      iconName="home"
                      />
                     <Scene
                        key="chat"
                        component={Chat}
                        title="Chat In"
                        icon={TabIcon}
                      iconName="comment"
                      />                       
                      <Scene
                        key="play"
                        component={Play}
                        title="Menu"
                        icon={TabIcon}
                      iconName="play"
                      />
                      <Scene
                        key="Notif"
                        component={Notification}
                        title="Notification In"
                        icon={TabIcon}
                      iconName="bell"
                      />
                       
                       <Scene
                        key="profile"
                        component={Profile}
                        title="Profile"
                        icon={TabIcon}
                        iconName="user"
                      />                                            
          </Scene>
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
            hideNavBar={false}
            hideBackImage={false} 
            // rightButtonImage={require('./src/assets/settings.png')}
            // onLeft = {() => Actions.home()}
            // leftButtonImage={require('./src/assets/user.png')}
            // leftButtonIconStyle={{ alignItems: 'flex-start', height: 30, width: 30}}
          />


           <Scene
            key="signupartist"
            component={SignupArt}
            title="Signup Artist "
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
  navigationTabBar: {
   backgroundColor: '#FFFFFF'

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

//Create a dedicated class that will manage the tabBar icon and the properties of the items in the tabbar
class TabIcon extends React.Component {
  render() {
    return (
      <FontAwesome name={this.props.iconName} size={30} color="blue"  />
    );
  }
}
