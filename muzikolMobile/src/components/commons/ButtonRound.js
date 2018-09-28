import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ButtonRound extends Component {

    render() {
        const { onPress } = this.props;

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

// styles
const styles = StyleSheet.create({
    button: {
backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,

        height: 50,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#555555',
        paddingHorizontal: 50,
        paddingVertical: 10,
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    }
});

export default ButtonRound;
