/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class appReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.first, styles.common]}>
          <Text >
            First
          </Text>
        </View>
        <View style={[styles.second, styles.common]}>
          <Text style={styles.welcome}>
            Second Section
          </Text>
        </View>
          <View style={[styles.third, styles.common]}>
          <Text>
            Third{'\n'}
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first:{
    flex:1,
    backgroundColor: '#00e',
  },
  second:{
    flex:8,
    backgroundColor: '#FFF',
  },
  third:{
    flex:1,
    backgroundColor: '#00e',
  },
  common:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('appReact', () => appReact);
