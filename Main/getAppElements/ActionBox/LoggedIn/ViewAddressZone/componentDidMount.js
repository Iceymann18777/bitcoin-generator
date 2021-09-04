import { getState, setState } from '../../../../../reduxX';
// import { createElement as e } from 'react';
// import {
//     StyleSheet,
//     TouchableOpacity,
//     View,
//     Text
// } from 'react-native';
// // import { actionBoxModes } from '../../../constants';


export default () => {

    new Promise( async resolve => {

        const exisitngAddressData = getState(
            
            'viewAddressZone',
            'addressData'
        );

        if( exisitngAddressData ) {

            return resolve();
        }

        try {

            const bitcoinApi = getState( 'bitcoinApi' );
            
            const addressData = await bitcoinApi.createOrGetAddress();

            setState(
                
                [ 'viewAddressZone', 'addressData' ],
                addressData
            );
        }
        catch( err ) {
    
            console.log(
                'error in ViewAddressZone.componentDidMount:',
                err 
            );

            setState(
                
                [ 'viewAddressZone', 'addressData' ],
                null
            );
        }

        resolve();
    });
};
