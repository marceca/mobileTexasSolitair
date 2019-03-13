import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import store from './Src/state/store';
import Game from './Src/components/Game';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}><View style={styles.container}><Game /></View></Provider>
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
