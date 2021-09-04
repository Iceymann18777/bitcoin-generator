import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { fonts } from '../../constants';
import { getState } from '../../reduxX';


const getStyles = () => {
    
    const mainStyleObject = getState( 'mainStyleObject' );

    return StyleSheet.create({

        outerContainer: {
            // backgroundColor: 'pink',
    
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 0.2,
        },
    
        titleText: {
    
            marginTop: 90,
            fontSize: 20,
            color: mainStyleObject.color,
            fontFamily: fonts.standard.bold,
        }
    });
};




// const styles = StyleSheet.create({
//     outerContainer: {
//         // backgroundColor: 'pink',

//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         flex: 0.2,
//     },

//     titleText: {

//         marginTop: 90,
//         fontSize: 20,
//         color: colours.black,
//         fontFamily: fonts.standard.bold,
//     }
// });


export default () => {
  
    const styles = getStyles();

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e(
            Text,
            {
                style: styles.titleText
            },
            'Testnet App by Bitcoin-Api.io'    
        )
    );
};
