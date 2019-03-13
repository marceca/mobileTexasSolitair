import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import store from '../../state/store';
import * as types from '../../state/actions/actions';

const mapStateToProps = (state) => {
  return {
    game: state.application,
    settings: state.settings
  }
}

class Change_Card_Back extends Component {

  cardBackClose() {
  }

  changeCardBack(e) {
    store.dispatch(types.changeCardBack(e.target.source))
  }
  render() {
    return (
      <View className="secondary-settings-conatiner background-image-change change-card-back-container">
        <View  className="background-image-top-bar">
          <Text className="background-image-header">Change Card Back</Text>
          <TouchableHighlight onPress={() => this.cardBackClose()}><Image source={require("../../assets/settings_page/White_X.png")} /></TouchableHighlight>
        </View>
        <View className="flex-column">
          <View className="flex-row padding-top-10px">
            <TouchableHighlight onPress={(e) => this.changeCardBack(e)}><Image source={require("../../assets/settings_page/Blue_Card_Back_Button.png")} /></TouchableHighlight>
            <TouchableHighlight onPress={(e) => this.changeCardBack(e)}><Image source={require("../../assets/settings_page/Red_Card_Back_Button.png")} /></TouchableHighlight>
          </View>
          <View className="flex-row">
          <TouchableHighlight onPress={(e) => this.changeCardBack(e)}><Image source={require("../../assets/settings_page/Deadly_Woman_Card_Back_Button.png")} /></TouchableHighlight>
          <TouchableHighlight onPress={(e) => this.changeCardBack(e)}><Image source={require("../../assets/settings_page/Logo_Card_Back_Button.png")} /></TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps)(Change_Card_Back);