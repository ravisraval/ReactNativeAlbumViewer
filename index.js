import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import BackgroundTask from 'react-native-background-task';
import { Vibration, Alert } from 'react-native';

BackgroundTask.define(() => {
    Vibration.vibrate([500, 500, 500, 500, 500, 500, 500, 500]);
    console.log('i just vibrated yo');
    Alert.alert(
      'backgroundtask Alert',
      'Im outside render',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
});

class App extends Component {

  componentDidMount() {
    BackgroundTask.schedule({
      period: 900,
    });
  }

  render() {
    return (
      Alert.alert(
        'Render Alert',
        'Im inside render',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      // <View>
      //   <Header headerText={'Albums'} />
      //   <AlbumList />
      // </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeApp', () => App);
