import AsyncStorage from '@react-native-community/async-storage';
import Clipboard from '@react-native-community/clipboard';
import { createElement as e } from 'react';
import { resetReduxX } from '../../../../../reduxX';
import MegaButton from '../MegaButton';


export default () => {

    return e(
        MegaButton,
        {
            buttonText: 'Copy and Eject Token',
            onPress: async () => {

                const string = await AsyncStorage.getItem( 'token' );

                Clipboard.setString( string );

                resetReduxX({
                    listOfKeysToInclude: [
                        [ 'actionBox', 'mode' ],
                        [ 'auth', 'tokenInfo' ]
                    ]
                });
            }
        }
    );
};
