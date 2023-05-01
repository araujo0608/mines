import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Mines from '../Mines';
import Flag from '../Flag';

const Field = (props) => {
  const { mined, opened, nearMines, exploded, flagged } = props;

  // == styles logic ==
  const styleField = [styles.field];
  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (flagged) styleField.push(styles.flagged)
  if (!opened && !exploded) styleField.push(styles.regular);

  let color = null;
  if (nearMines > 0){
    if (nearMines == 1) color = '#2A28D7'
    if (nearMines == 2) color = '#2B520F'
    if (nearMines > 2 && nearMines < 6) color = '#F9060A'
    if (nearMines >= 6) color = '#F221A9'
  }

  return(
    <View style={styleField}>
      
      {
        !mined && opened && nearMines > 0 
        ? 
        <Text style={[styles.label, {color: color}]}> {nearMines} </Text> 
        :
        false
      }

      { 
        mined && opened 
        ? 
        <Mines /> 
        :
        false
      }

      {
        flagged && !opened
        ?
        <Flag />
        :
        false
      }

    </View>
  )
}

export default Field;