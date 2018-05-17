import React from 'react';
import { Text, AppRegistry } from 'react-native';

class RNHelloWorld extends React.Component {
  render() {
    return (
      <Text>Hello, RN!</Text>
    );
  }
}

// Module name
AppRegistry.registerComponent('RNHelloWorld', () => RNHelloWorld);
