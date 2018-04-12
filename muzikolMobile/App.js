import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupArtist from './src/components/views/SignupArtist';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text >Hello Harisu </Text>

          <SignupArtist />
      </View>
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
});
