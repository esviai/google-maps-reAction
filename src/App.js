import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Maps from './Maps'

export default class googleMapsReAction extends React.Component {
  constructor () {
    super ()
  }

  render() {
    return (
      <View style={styles.container}>
        <Maps />
        <Text>
          {`HOLA! I'm a map!`}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
