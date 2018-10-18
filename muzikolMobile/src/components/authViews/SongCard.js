
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Alert,
	BackHandler,
	Image,
	TextInput,
	TouchableWithoutFeedback
} from 'react-native';

import { Card } from './../../components/commons/Card';
import InputRound  from './../../components/commons/InputRound';
import { Header } from './../../components/commons/Header';
import { Actions } from 'react-native-router-flux';

import Splash from '../views/Splash';
//logic here is to display splash if there is nothing on the state 
//hence when the api call has fetched something then display that thing


class SongCard extends Component {

		state = {
			content: true,
        	loggedIn: false,
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
            <Card>
                            <View style={styles.cardHeader}>
                                <Image
                                    style={styles.iconStyle2}
                                    source={require('./../../assets/akon.png')}
                                />
                                <Text style = {styles.artistName}>brino man</Text>
                                <Text style = {styles.lastUpdated}>5days ago</Text>

                            </View>
                            <TouchableWithoutFeedback >
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={{uri: this.props.song.coverart}}
                                    />
                                    <View style={styles.songHeaderContainer}>
                                        <Text numberOfLines={1} style={styles.songStyle}>{this.props.song.title}</Text>
                                        <Text style={styles.songDescriptionStyle}>{this.props.song.description} {this.props.song.url}</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.cardFooterSection}>
                                <View style={styles.cardFooterLeft} >
                                    <Image
                                        style={styles.iconStyle2}
                                        source={require('./../../assets/akon.png')}
                                    />
                                </View>
                                <View style={ styles.cardFooterRight} >
                                    <Image
                                        style={styles.iconStyle2}
                                        source={require('./../../assets/chat.png')}
                                    />
                                </View>
                             </View>
                        </Card>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    lastUpdated: {
    	textAlign: 'right',
    	flex: 1,
    	paddingRight: 5,
    	marginRight: 5,
    	fontSize: 11,
        fontWeight: '100'

    },
    cardHeader: {
    	flexDirection: 'row',
    },
    artistName: {
    	paddingLeft: 10,
    	flex: 2,
    },
    cardFooterSection: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
      },
	cardFooterLeft:{
		width: 100, 
		borderWidth: 1, 
		borderColor: '#D1D1D1', 
		justifyContent: 'center', 
		alignItems: 'center', 
		flex: 1, 
		borderTopLeftRadius: 25,
		borderBottomLeftRadius: 25, 
		height: 30
	},
    cardFooterRight: {
    	width: 100, 
    	borderWidth: 1, 
    	borderColor: '#D1D1D1', 
    	alignItems: 'center', 
    	justifyContent: 'center', 
    	flex: 1,
    	borderTopRightRadius: 25,
    	borderBottomRightRadius: 25, 
    	height: 30
	},
    songContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    songHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    songStyle: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: '200',
        color: '#252525',
        fontSize: 15
    },
    songDescriptionStyle: {
        fontSize: 14,
        fontWeight: '300',
        paddingHorizontal: 5,
        marginBottom: 10,
        textAlign: 'center'
    },
    iconStyle: {
        padding: 10,
        margin: 10,
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconStyle2: {
        margin: 0,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        marginLeft:10,

        borderRadius: 15
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D1D1D1',
        height: 40,
        borderRadius: 5 ,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        marginTop: 15,
        marginBottom: 15
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    imageStyle: {
        height: 90,
        width: 90,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,

        overflow: 'hidden',
        marginLeft: 10,
        marginRight: 10,
    }
});

export default SongCard;