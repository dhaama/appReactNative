/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, ListView } from 'react-native';

export default class appReact extends Component {

  constructor(props) {
    super(props);
  
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    this.state = {
      data: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };

    this.getMovieData();
  }

  getMovieData(){
    fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
            const data = responseJson.movies;
            console.log(data)
            this.setState({
              data: this.state.data.cloneWithRows(data)
            });
          })
          .catch((error) => {
            console.error(error);
          });
  }



  render() {

    const { data } = this.state
    console.log('data', data)

    return (
      <View style={styles.container}>
        <View style={[styles.first, styles.common]}>
          <Text >
            First
          </Text>
        </View>
        <View style={[styles.second, styles.common]}>
          <ListView 
            dataSource={this.state.data}
            renderRow={(item) => <Text>{item.title}+++{item.releaseYear}</Text>}
          />
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
    paddingTop:20,
    //flexDirection:'row',
  },
  first:{
    flex:1,
    backgroundColor: '#ccc',
  },
  second:{
    flex:8,
    backgroundColor: '#FFF',
  },
  third:{
    flex:1,
    backgroundColor: '#ccc',
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
