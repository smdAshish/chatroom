import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({});
