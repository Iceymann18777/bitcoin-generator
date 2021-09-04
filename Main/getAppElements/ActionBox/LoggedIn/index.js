import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import BalanceDisplay from './BalanceDisplay';
import ViewAddressButton from './ViewAddressButton';
import WithdrawButton from './WithdrawButton';
import WithdrawZone from './WithdrawZone';
import ViewAddressZone from './ViewAddressZone';
import VerifySection from './VerifySection';
import EjectAndCopyToken from './EjectAndCopyToken';
import { getState } from '../../../../reduxX';
import { actionBoxModes } from '../../../../constants';


const styles = StyleSheet.create({
    outerContainer: {
        // backgroundColor: colours.bitcoinBlue,
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});


export default () => {

    const actionBoxMode = getState( 'actionBox', 'mode' );
    const tokenInfo = getState( 'auth', 'tokenInfo' );

    const components = [];

    if( actionBoxMode === actionBoxModes.viewAddress ) {

        components.push( 
            
            e( ViewAddressZone ),
        );
    }
    else if( actionBoxMode === actionBoxModes.withdraw ) {

        components.push( 
            
            e( WithdrawZone ),
        );
    }
    else {

        components.push( 
            
            e( BalanceDisplay )
        );

        if( tokenInfo.isActivated ) {

            components.push( 
            
                e( ViewAddressButton ),
                e( WithdrawButton )
            );
        }
        else {

            components.push(

                e( VerifySection )
            );
        }

        components.push(

            e( EjectAndCopyToken )
        );
    }

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        ...components
    );
};
