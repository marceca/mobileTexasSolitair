import React, { Component } from 'react';
import {View, TouchableHighlight, Image, Text, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import store from '../state/store';
import * as types from '../state/actions/actions';
import Background_Image_Selection from './settings/Background_Image_Selection';
import Change_Card_Back from './settings/Change_Card_back';
import Total_Number_Of_Hands from './settings/Total_Number_Of_Hands';
import Hand_Ranks from './settings/Hand_Ranks';
import Tutorial from './settings/Tutorial';
import Main_Menu from './Main_Menu';
import Settings from './Settings';
import Stick_Switch_Hands from'./Stick_Switch_Hands';
import backgroundPossibilities from './Constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const mapStateToProps = (state) => {
  return {
    game: state.application,
    settings: state.settings
  }
}
class Game extends Component {

  deal(el, props) {
    let button = document.getElementById('game-button').innerHTML;
    if(props.game.dealt === false) {
      store.dispatch(types.deal())
      document.getElementById('game-button').innerHTML = 'Flop';
    }
    if(button === 'Flop' && props.game.chosenHand != false) {
      store.dispatch(types.flop());
      document.getElementById('game-button').innerHTML = 'Turn';
    }
    if(button === 'Turn') {
      store.dispatch(types.turn());
      document.getElementById('game-button').innerHTML = 'River';
    }
    if(button === 'River') {
      store.dispatch(types.river());
      document.getElementById('game-button').innerHTML = 'Results';
    }
    if(button === 'Results') {
      store.dispatch(types.results());
      document.getElementById('game-button').innerHTML = 'Reset';
    }
  }

  switch() {
    store.dispatch(types.allowSwitch())
  }

  openSettings() {
    store.dispatch(types.settings())
  }
  
  playerCardOne() {
    if(this.props.game.userHand.length > 0) {
      return this.props.game.handsDisplay[this.props.game.chosenHand - 1][0]
    }
  }

  playerCardTwo() {
    if(this.props.game.userHand.length > 0) {
      return this.props.game.handsDisplay[this.props.game.chosenHand - 1][1]      
    }
  }

  render() {
    const bg = backgroundPossibilities[this.props.settings.main_background_image]
    return (
      console.log('props ', this.props),
      <ImageBackground style={styles.mainBackgroundImage} source={bg}>
        <View style={styles.container} className="background-image-container">
          {this.props.settings.mainMenu ? <Main_Menu /> : null}
            <View style={styles.imageContainer} className="settings-icon" >
              <TouchableHighlight onPress={() => this.openSettings()}>
                <Image style={styles.settingsIcon} source={require('../assets/icons/settings.png')} />
              </TouchableHighlight>
            </View>
            {/* Setting Pages */}
            {this.props.settings.tutorial ? <Tutorial /> : null}
            {this.props.settings.hand_ranks ? <Hand_Ranks /> : null}
            {this.props.settings.background_image ? <Background_Image_Selection /> : null}
            {this.props.settings.total_hands ? <Total_Number_Of_Hands /> : null}
            {this.props.settings.change_card_back ? <Change_Card_Back /> : null}
            { this.props.settings.settings ? <Settings /> : null}
            <View className="cards-container">
              <View className="player-hands-container">
                <Stick_Switch_Hands />
              </View>
              <View className="community-card-container">
                <View>
                  <View className="community-cards">
                    {this.props.game.communityCards}
                  </View>
                </View>
              </View>
            </View>
            <View className="buttons-container">
              <View className="user-cards">
                <View className="possible-hand">
                  {this.props.game.handsDisplay[this.props.game.handsDisplay.length - 1]}
                </View>
              </View>
              <View className="stick-switch-buttons">
                <TouchableHighlight className="button stick" id="game-button" onClick={(e) => this.deal(e,this.props)} ><Text>Play</Text></TouchableHighlight>
                <TouchableHighlight className="button switch" onClick={(e) => this.switch(e,this.props)}><Text>Switch</Text></TouchableHighlight>
              </View>
            </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
  },
  mainBackgroundImage: {
    width: screenWidth,
    height: screenHeight
  },
  imageContainer: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 30,
    right: 30
  },
  settingsIcon: {
    width: 30,
    height: 30,
    zIndex: 10
  }
})



export default connect(mapStateToProps)(Game);
