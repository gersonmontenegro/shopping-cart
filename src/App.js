import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ProductList from './screens/list';
import { MainNavigator } from './navigation/';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <MainNavigator />
      </View>
    );
  }
}
