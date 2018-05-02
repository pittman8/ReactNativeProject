import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Address from './Address';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
          Welcome to Expo Pittman!
          </Text>
          <Address />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
