import { StyleSheet } from 'react-native';
import params from '../../params';

const styles = StyleSheet.create({
    field:{
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular:{
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label:{
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 1,
        textShadowOffset: {width: 0.5, height: 0.5},
        fontSize: params.fontSize
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    flagged:{
        
    }
});

export default styles;