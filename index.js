import { useState, createElement as e } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Main from './Main';
import { getState, setUpReduxX } from './reduxX';

const getStyles = () => {

    const {

        backgroundColor

    } = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            backgroundColor,
            // width: '100%',
            // height: '100%',
            flex: 1,
            
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};


export default () => {

    setUpReduxX( useState );

    const styles = getStyles();

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e( Main )
    );
};
