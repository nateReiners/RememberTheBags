import React, { Component } from 'react';
import {
  Navigator,
  View,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';

import MapView from 'react-native-maps';

export default class RememberYourBags extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View>
        <Text>
          Entry file is working this is the App component!
        </Text>
        <MapView
          style={styles.mapview}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mapview: {
    height: 300,
    alignSelf: 'stretch'
  }
})
