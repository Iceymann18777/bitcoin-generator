import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
    // ScrollView
} from 'react-native';
import getAppElements from './getAppElements';
// import { colours } from './constants';
import { getState } from '../reduxX';

const getStyles = () => {
    
    const mainStyleObject = getState( 'mainStyleObject' );

    return StyleSheet.create({
        outerContainer: {
            backgroundColor: mainStyleObject.backgroundColor,
            width: '100%',
            // height: '100%',

            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    });
};


export default () => {

    return e(
        View,
        {
            style: getStyles().outerContainer,
        },
        ...getAppElements()
    );
};
