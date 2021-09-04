import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    colours,
    fonts
    // mainStyles,
    // mainStyleToMainStyleObject
} from '../../../constants';
import { getState } from '../../../reduxX';
// import { getState, setState } from '../../../reduxX';


const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: colours.apiRoyalBlue,
        // width: '100%',
        height: '100%',

        flex: 0.8,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    message: {

        color: colours.white,
        fontFamily: fonts.standard.regular,        
        fontSize: 16,
        padding: 20,
        textAlign: 'left'
    }
});


export default () => {

    const theMessage = getState( 'messageBox', 'theMessage' );

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e(
            Text,
            {
                style: styles.message,
            },
            (

                theMessage

            ).substring( 0, 30 )
        )
    );
};
