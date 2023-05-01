import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Flag = () => {
    return(
      <View style={styles.container}>
        <View style={styles.flagPole}/>
        <View style={styles.flag}/>
        <View style={styles.base1}/>
        <View style={styles.base2}/>
      </View>
    )
}

export default Flag;