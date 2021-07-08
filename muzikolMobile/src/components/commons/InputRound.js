import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class InputRound extends Component {
    render() {
        const { iconName, secureTextEntry, placeholder, value, onChangeText } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.sectionStyle}>

                    <TextInput
                        style={{flex: 1}}
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        underlineColorAndroid="transparent"
                        value={value}
                        onChangeText={onChangeText}
                    />
                </View>
            </View>
        );
    }
}
//
//defining of the styles to be used in the button component exclusively for this classs of the object
// uncomment the section style inorder to get ride of the part that is responsible for the styles.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 25 ,
        margin: 10,
    }

});

 export default InputRound;
