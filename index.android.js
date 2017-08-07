/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */




 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


 var MOCKED_MOVIES_DATA = [
 {title:'标题',year:'2017',posters:{thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
 ];

 var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';



export default class helloworld extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: null,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  ComponentDidMount(){
    this.fetchData;
  }

  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}> 
      <Image 
      source={{uri: movie.posters.thumbnail}} 
      style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
      <Text style={styles.title}>{ movie.title} </Text>
      <Text style={styles.year}> {movie.year} </Text> 
      </View>
      </View>
      );
    }

    fetchData(){
      fetch(REQUEST_URL)
      .then((response) => response.json())
      .then(
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    thumbnail:{
      width: 53,
      height :81,
    },
    rightContainer:{
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center',
    },
  });

  AppRegistry.registerComponent('helloworld', () => helloworld);
