/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, ListView, Navigator, ActivityIndicator, Button, Alert, } from 'react-native';

import MyScene from './view/MyScene'



export default class appReact extends Component {

  constructor(props) {
    super(props);
  
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    this.state = {
      data: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']),
      loading: true,
    };
  }

  componentDidMount(){
    this.getMovieData();
  }


  getMovieData(){
    fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
            const data = responseJson.movies;
            console.log(data)
            this.setState({
              data: this.state.data.cloneWithRows(data),
              loading: false,
            });
          })
          .catch((error) => {
            console.error(error);
          });
  }

  onButtonPress = () => {
    Alert.alert(
      '你点击了按钮',
      '这是看的信息',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed!')},
        {text: 'Middle', onPress: () => console.log('Middle Pressed!')},
        {text: 'No', onPress: () => console.log('No Pressed!')},
      ],
      {
        cancelable: false
      }
      )
  }



  render() {

    const { data } = this.state
    console.log('data', data)

    return (
      <View style={styles.container}>
        

        <Navigator
          style={styles.nav}
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <MyScene
              title={route.title}

              // Function to call when a new scene should be displayed
              onForward={() => {    
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
        />
          
        <View style={[styles.second, styles.common]}>
          <ActivityIndicator size="large" style={styles.common} color="#00f" animating={this.state.loading}/>
            <ListView 
              dataSource={this.state.data}
              renderRow={(item) => <Text>{item.title}+++{item.releaseYear}</Text>}
            />
        </View>

        <Button title="按  钮" disabled={false} onPress={this.onButtonPress} />

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
    //flexDirection:'row',
  },
  nav:{
    marginTop:25,
  },
  first:{
    flex:1,
    backgroundColor: '#ccc',
    paddingTop:20,
  },
  second:{
    flex:1,
    backgroundColor: '#ccc',
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
