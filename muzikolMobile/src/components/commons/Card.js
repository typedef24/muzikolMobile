import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF', 
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#696969',
    shadowOffset: { width: 3, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    borderRadius: 15,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
};

export { Card };
