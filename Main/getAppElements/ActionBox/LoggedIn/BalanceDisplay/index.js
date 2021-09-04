import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { getState } from '../../../../../reduxX';
import { fonts } from '../../../../../constants';

const getStyles = () => {

    const mainStyleObject = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            backgroundColor: mainStyleObject.backgroundColor,
            flex: 0.2,
            width: '100%',

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        text: {

            width: '100%',
            textAlign: 'left',
            fontSize: 20,
            paddingLeft: 30,
            color: mainStyleObject.color,
            fontFamily: fonts.standard.regular,
        },
    });
};

export default () => {

    const tokenInfo = getState( 'auth', 'tokenInfo' );

    const styles = getStyles();

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e(
            Text,
            {
                style: styles.text,
            },
            `Balance: ${ tokenInfo.balanceData.amount } BTC`
        )//,
        // e(
        //     Text,
        //     {
        //         style: styles.text,
        //     },
        //     `Balance Status: ${ tokenInfo.balanceData.status }`
        // )
    );
};
