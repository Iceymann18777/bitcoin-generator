import BitcoinApi from 'bitcoin-api';
import setMessage from '../messageBoxCommon/setMessage';
// import AsyncStorage from '@react-native-community/async-storage';
import { resetReduxX, setState } from '../../reduxX';


export default async ({

    token

}) => {

    if( !token ) {

        return {
            
            bitcoinApi: null,
            tokenInfo: null,
        };
    }

    try {

        const bitcoinApi = new BitcoinApi({
        
            testnetToken: token,
        });
        
        const tokenInfo = await bitcoinApi.getTokenInfo();

        const tokenInfoIsInvalid = !(
          
            !!tokenInfo &&
            (typeof tokenInfo.isActivated === 'boolean') &&
            (typeof tokenInfo.balanceData.amount === 'number')
        );
     
        if( tokenInfoIsInvalid ) {
    
            throw new Error(
                `invalid tokenInfo: ${ JSON.stringify( tokenInfo ) }`
            );
        }

        setState( 'bitcoinApi', bitcoinApi );

        return {
            
            bitcoinApi,
            tokenInfo,
        };
    }
    catch( err ) {

        console.log( 'error in initializeBitcoinApi:', err );

        setMessage({

            message: err.toString()
        });

        resetReduxX({
            listOfKeysToInclude: [
                [ 'auth', 'tokenInfo' ]                
            ]
        });

        return {
            
            bitcoinApi: null,
            tokenInfo: null,
        };
    }
};