import { createElement as e } from 'react';
import {
    View,
    StyleSheet,
    // TouchableOpacity,
} from 'react-native';
import {
    
    colours,
    // mainStyles,
    // mainStyleToMainStyleObject

} from '../../../constants';
// import { getState, setState } from '../../../reduxX';
import ChangeMainStyleButton from './ChangeMainStyleButton';
import TheMessageContainer from './TheMessageContainer';


const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: colours.apiRoyalBlue,
        // backgroundColor: 'pink',
        width: '100%',

        flex: 0.1,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});


export default () => {
  
    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e( ChangeMainStyleButton ),
        e( TheMessageContainer )
    );
};
