import { createElement as e } from 'react';
import {
    StyleSheet,
    // TouchableOpacity,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { getState, setState } from '../../../../../reduxX';
import { fonts } from '../../../../../constants';
import WithdrawBox from './WithdrawBox';
// import componentDidMount from './componentDidMount';


const getStyles = () => {

    const {

        backgroundColor,
        color,

    } = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            // backgroundColor: 'indigo',
            height: '100%',
            width: '100%',

            // backgroundColor,

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },

        backButton: {

            width: '100%',
            backgroundColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        backButtonText: {

            fontSize: 20,
            width: '100%',
            paddingTop: 13,
            paddingBottom: 13,
            textAlign: 'center',
            color,
            fontFamily: fonts.standard.regular,
        },
    });
};


export default () => {

    // useEffect( componentDidMount, [] );

    // const addressData = getState( 'viewAddressZone', 'addressData' );
    
    const styles = getStyles();

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e( WithdrawBox ),
        e(
            TouchableOpacity,
            {
                style: styles.backButton,
                onPress: () => {

                    setState( [ 'actionBox', 'mode' ], null );
                }
            },
            e(
                Text,
                {
                    style: styles.backButtonText,
                },
                'BACK'
            )
        )
    );
};
