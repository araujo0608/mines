import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Field from '../Field';

const Minefield = (props) => {
    const rows = Array(props.board).map((row, r) => {
        const columns = Array(row).map((field, c) => {
            return <Field {...field} key={c}/>
        })
        return <View key={r}
        style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

export default Minefield;