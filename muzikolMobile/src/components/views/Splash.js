import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Splash extends Component {
	render() {
		return (
			<View style = {styles.container}>
				
                <Image
                    style={styles.backButtonStyle}
                    source={require('../../assets/onboarding.png')}
                />
            
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#555555',

	},
	header: {
		fontSize: 40,
	},

	 iconStyleContainer: {
        flex: 1
    },
    backButtonStyle: {
    	flex: 1,
    },

})

export default Splash;

