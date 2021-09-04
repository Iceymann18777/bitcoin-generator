import { getState, resetReduxX } from '../../../../../../../reduxX';


export default async () => {

    try {

        const amount = getState( 'withdrawZone', 'amount' );
        const address = getState( 'withdrawZone', 'address' );
        
        if( !amount || !address ) {

            return;
        }

        resetReduxX({

            listOfKeysToInclude: [
                [ 'withdrawZone', 'amount' ],
                [ 'withdrawZone', 'address' ]
            ]
        });

        const bitcoinApi = getState( 'bitcoinApi' );

        await bitcoinApi.withdraw({
 
            amount: Number( amount ),
            address: address,
            includeFeeInAmount: false
        });

        console.log( 'successfully withdrew bitcoin' );
    }
    catch( err ) {

        console.log( 'error in withdrawing bitcoin:', err );
    }
};
