import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import store from './Src/state/store';
import Game from './Src/components/Game';
import { Google } from 'expo';
import signInAsync from './Authentication';

// console.log('google ', Google)

console.log(signInAsync);
signInAsync()
// const googleWebAppId = '846083047297-2k0h3gl1orlo511la10m7o570dra5u0j.apps.googleusercontent.com';

// let result = await Expo.AuthSession.startAsync({
//   authUrl:
//     `https://accounts.google.com/o/oauth2/v2/auth?` +
//     `&client_id=${googleWebAppId}` +
//     `&redirect_uri=${encodeURIComponent('/')}` +
//     `&response_type=code` +
//     `&access_type=offline` +
//     `&scope=profile`,
// });

// console.log('result ', result)

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}><View style={styles.container}></View></Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxWidth: screenWidth,
    maxHeight: screenHeight,
    height: screenHeight,
    width: screenWidth
  }
});
