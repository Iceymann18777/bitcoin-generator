import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import createNewToken from './createNewToken';
import getPastedTokenData from './getPastedTokenData';
import AsyncStorage from '@react-native-community/async-storage';
import Clipboard from '@react-native-community/clipboard';
import { getState, setState } from '../../../../reduxX';
import { fonts } from '../../../../constants';
import { messageBoxCommon } from '../../../../utils';


const getStyles = () => {

    const mainStyleObject = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            // backgroundColor: 'red',
            width: '100%',
            height: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },

        button: {

            width: '85%',
            flex: 0.25,
            backgroundColor: mainStyleObject.backgroundColor,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },

        buttonText: {

            fontSize: 20,
            textAlign: 'center',
            color: mainStyleObject.color,
            fontFamily: fonts.standard.regular
        }
    });
};


const updateTokenInfoAppData = async ({

    getTokenDataFunction

}) => {

    try {
        
        const {

            token,
            tokenInfo,
            
        } = await getTokenDataFunction();

        setState( [ 'auth', 'tokenInfo' ], tokenInfo );
        await AsyncStorage.setItem( 'token', token );
    }
    catch( err ) {

        messageBoxCommon.setMessage({

            message: err.message
        });

        console.log( 'error in updateTokenInfoAppData:', err );

        setState( [ 'auth', 'tokenInfo' ], null );
        await AsyncStorage.removeItem( 'token' );
    }
};


export default () => {

    const styles = getStyles();

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e(
            TouchableOpacity,
            {
                // title: 'Create Token',
                style: styles.button,
                onPress: async () => {

                    await updateTokenInfoAppData({

                        getTokenDataFunction: createNewToken,
                    });
                }
            },
            e(
                Text,
                {
                    style: styles.buttonText,
                },
                'Create New Token'
            )
        ),
        e(
            TouchableOpacity,
            {
                // title: 'Create Token',
                style: styles.button,
                onPress: async () => {

                    try {

                        const token = await AsyncStorage.getItem( 'token' );

                        Clipboard.setString( token );
                    }
                    catch( err ) {

                        await messageBoxCommon.setMessage({

                            message: err.message
                        });
                    }
                }
            },
            e(
                Text,
                {
                    style: styles.buttonText,
                },
                'Copy Token in Storage'
            )
        ),
        e(
            TouchableOpacity,
            {
                // title: 'Paste Token',
                style: styles.button,
                // color: '#f194ff',
                onPress: async () => {

                    await updateTokenInfoAppData({

                        getTokenDataFunction: getPastedTokenData,
                    });
                }
            },
            e(
                Text,
                {
                    style: styles.buttonText,
                },
                'Paste Token from Clipboard'
            )
        )
    );
};
