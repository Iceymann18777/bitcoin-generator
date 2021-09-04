import Clipboard from '@react-native-community/clipboard';
// import BitcoinApi from 'bitcoin-api';
import { tokens } from '../../../../utils';


export default async () => {

    // await Clipboard.setString( 'afaaa39679da432c8d0b9a64178621783f25ae3ec60e49f7a20196331a49d995d316466132a74d82991450eb4c9be5920a78fd49b69040c8a93cbd4228124ff628243fb08fb34e4db2c9d60203f3e89db7c5fa43e86e48ffb8d1a9f235dfca01fbf6a14d23c4439688225b8eda0700ee1eda2f222a5a45fa9f67c1c2f3ea766afc5c4f538730466abfcd7c798249738258abc7d8ddbb49b2b09551ed238eac65ab722899932543ff921bb7a948510444fbecefdfbe114413af962a0fecdc5da1c5ab05c94aa045a29d7459d29e8df9f360d82597ce034e9f9fb936d543a114913163f3fac6ad4c8bab5f56cf94e81d14925f339c30d74fb3a56b4e1486cd8ea8b4e66613925a4e08ab86e6e6f6092088da6ce1ac863f485b87765f7598d9e20886096725e35b43da829c46eda54c247b7709504d226141f6bee8b742cd12ff2153c9279438834299abfb37b189f517a1' );
    const token = await Clipboard.getString();

    const {

        tokenInfo

    } = await tokens.initializeBitcoinApi({

        token
    });

    return {
        
        token,
        tokenInfo,
    };
};
