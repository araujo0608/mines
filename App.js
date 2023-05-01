import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import params from './src/params';
import Field from './src/components/Field';
import Minefield from './src/components/Minefield';
import { createMinedBoard } from './src/engine'

export default function App() {

  const [stateBoard, setStateBoard] = useState(createState);

  const minesAmount = () => {
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(columns * rows * params.difficultLevel);
  }

  const createState = () => {
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, columns, minesAmount)
    }
  }

  return (
    <View style={styles.container}>
      <FontAwesome name="sliders" size={30} color="blue" />
      <View style={styles.board}>
        <Minefield board={stateBoard}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
