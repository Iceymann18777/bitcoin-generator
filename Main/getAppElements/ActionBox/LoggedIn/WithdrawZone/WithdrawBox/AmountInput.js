import { createElement as e } from 'react';
import {
    StyleSheet,
    // TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native';
import { getState, setState } from '../../../../../../reduxX';
import { fonts } from '../../../../../../constants';
// import componentDidMount from './componentDidMount';

const getStyles = () => {

    const {

        // backgroundColor,
        alternateBackgroundColor,
        alternateColor,

    } = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            // backgroundColor: 'indigo',
            width: '100%',
            backgroundColor: alternateBackgroundColor,

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        theText: {
    
            // backgroundColor: alternateBackgroundColor,
            color: alternateColor,
            // flex: 0.7,
            fontSize: 20,
            padding: 15,
            fontFamily: fonts.standard.regular,
        },

        btcTextContainer: {
            
            // backgroundColor: 'pink',
            // flex: 0.3,

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
    });
};


export default () => {

    // useEffect( componentDidMount, [] );

    const amount = getState( 'withdrawZone', 'amount' );
    
    const styles = getStyles();

    const amountDisplay = String( amount );

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e( 
            TextInput,
            {
                onChangeText: text => {

                    const textAsNumber = Number( text );

                    if(
                        Number.isNaN( textAsNumber ) ||
                        textAsNumber > 69 ||
                        text.startsWith( '00' ) ||
                        (
                            (text.length > 1) &&
                            text.startsWith( '0' ) &&
                            text[1] !== ( '.' )
                        )
                    ) {

                        return;
                    }
                    
                    const periodSplitText = text.split( '.' );

                    if(
                        (periodSplitText.length === 2) &&
                        periodSplitText[1].length > 8
                    ) {

                        return;
                    }
                
                    setState( [ 'withdrawZone', 'amount' ], text );
                },
                keyboardType: 'numeric', 
                value: amountDisplay,
                style: styles.theText,
            }
        ),
        e(
            View,
            {
                style: styles.btcTextContainer,
            },
            e(
                Text,
                {
                    style: styles.theText,
                },
                'BTC'
            )
        )
    );
};
