import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import MapView from 'react-native-maps'

export default class Maps extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    return (
      <MapView
        style={ styles.map }
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Location"
          description="Hello" />
    </MapView>
    )
  }

}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  //container: {
  //  position: 'absolute',
  //  top: 0,
  //  left: 0,
  //  right: 0,
  //  bottom: 0,
  //  justifyContent: 'flex-end',
  //  alignItems: 'center',
  //},
  //map: {
  //  position: 'absolute',
  //  top: 0,
  //  left: 0,
  //  right: 0,
  //  bottom: 0,
  //},
})
