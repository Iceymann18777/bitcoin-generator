import { createElement as e } from 'react';
import { setState } from '../../../../../reduxX';
import { actionBoxModes } from '../../../../../constants';
import MegaButton from '../MegaButton';
// import {
//     StyleSheet,
//     TouchableOpacity,
//     // View,
//     Text
// } from 'react-native';


export default () => {

    return e(
        MegaButton,
        {
            onPress: () => {

                setState(

                    [ 'actionBox', 'mode' ],
                    actionBoxModes.viewAddress
                );
            },
            buttonText: 'View Deposit Address',
        }
    );
};
