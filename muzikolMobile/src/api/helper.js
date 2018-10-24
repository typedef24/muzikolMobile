import { AsyncStorage } from 'react-native';

import { constant } from './../constant/constant';

export default {

	 isloggedin(){
	 	return  AsyncStorage.getItem("MUZIKOL_USER_DATA").then(value => {
            if(JSON.parse(value) == null) {
               return false;
               
            } else {
                return true;
            }
        });
	 }
}