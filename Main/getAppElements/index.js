import { createElement as e/*, useState*/ } from 'react';
// import {
//     StyleSheet,
//     // View,
//     // ScrollView
// } from 'react-native';
// import { setUpReduxX } from './reduxX';
import Title from './Title';
import ActionBox from './ActionBox';
import MessageBox from './MessageBox';


export default () => {

    return [
        e( Title ),
        e( ActionBox ),
        e( MessageBox )
    ];
};
