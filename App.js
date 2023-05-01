import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';

export default function App() {
  const columns = params.getColumnsAmount();
  const rows = params.getRowsAmount();

  return (
    <View style={styles.container}>
      <Text>MINE GAME</Text>
      <Text>Grid size: {rows} x {columns}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
