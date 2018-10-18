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
                    style={styles.aplashImageStyle}
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
    borderWidth: 0,

 

	},
    aplashImageStyle: {
    	flex: 1,
    	 borderRadius: 15,
    	     borderWidth: 0,

    	     marginRight: 5


    },

})

export default Splash;

