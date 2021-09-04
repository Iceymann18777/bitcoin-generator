import { useEffect, createElement as e } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';
import { getState } from '../../../reduxX';
import componentDidMount from './componentDidMount';
import { colours } from '../../../constants';


const styles = StyleSheet.create({
    outerContainer: {
        // backgroundColor: 'yellow',
        width: '100%',
        backgroundColor: colours.apiRoyalBlue,

        flex: 0.5,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
});


export default () => {

    useEffect( componentDidMount, [] );

    const tokenInfo = getState( 'auth', 'tokenInfo' );

    const mainElement = !!tokenInfo ? e(

        LoggedIn

    ) : e(
        
        NotLoggedIn
    );
  
    return e(
        View,
        {
            style: styles.outerContainer,
        },
        mainElement
    );
};
