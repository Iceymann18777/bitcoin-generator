import { createElement as e } from 'react';
// import { setState } from '../../../../../reduxX';
// import { actionBoxModes } from '../../../../../constants';
import MegaButton from '../MegaButton';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Clipboard from '@react-native-community/clipboard';

// TODO: move to utils when used elsewhere
const openUrl = async ({ url }) => {

    const supported = await Linking.canOpenURL( url );

    if( supported ) {

        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL( url );
    }
    else {

        console.log( `Unable to open this URL: ${ url }` );
    }
};


export default () => {

    return e(
        
        MegaButton,

        {
            onPress: async () => {

                try {

                    const token = await AsyncStorage.getItem( 'token' );

                    Clipboard.setString( token );
                    
                    await openUrl({

                        url: 'https://api-bitcoin.io/token-activator',
                    });
                }
                catch( err ) {

                    console.log( 'error in api call:', err );
                }
            },
            buttonText: 'Paste Token and Activate',
        }
    );
};
