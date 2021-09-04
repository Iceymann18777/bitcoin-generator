import { createElement as e } from 'react';
import {
    StyleSheet,
    // TouchableOpacity,
    View,
    TextInput
} from 'react-native';
import { getState, setState } from '../../../../../../reduxX';
import { fonts, colours } from '../../../../../../constants';
// import componentDidMount from './componentDidMount';

const getStyles = () => {

    const {

        // backgroundColor,
        // color,
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

    const address = getState( 'withdrawZone', 'address' );
    
    const styles = getStyles();

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e( 
            TextInput,
            {
                placeholder: 'address',
                placeholderTextColor: colours.bitcoin.darkGrey,
                onChangeText: text => {

                    if( text.length > 50 ) {

                        return;
                    }
                
                    setState( [ 'withdrawZone', 'address' ], text.trim() );
                },
                value: address,
                style: styles.theText,
            }
        )
    );
};
