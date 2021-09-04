import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

export const actionBoxModes = {

    viewAddress: 'viewAddress',
    withdraw: 'withdraw',
};

export const fonts = {
    
    standard: isIOS ? {
     
        regular: 'ArialHebrew',
        bold: 'ArialHebrew-Bold',

    } : {

        regular: 'normal',
        bold: 'Roboto',
    }
};

export const colours = {

    apiRoyalBlue: '#019BE5',
    black: '#000000',
    white: '#ffffff',

    lightTechBlue: '#01537B',
    
    bitcoin: {
        blue: '#61B3BE',
        orange: '#FE8834',
        grey: '#656776',
        darkGrey: '#1A2836',
    },
};

export const mainStyles = {

    dark: 'dark',
    light: 'light',
};

const mainStyleToMainStyleObject = {

    [mainStyles.dark]: {

        color: colours.white,
        backgroundColor: colours.black,
        alternateBackgroundColor: colours.lightTechBlue,
        alternateColor: colours.white,
    },
    [mainStyles.light]: {

        color: colours.black,
        backgroundColor: colours.white,
        alternateBackgroundColor: colours.lightTechBlue,
        alternateColor: colours.white,
    }
};

for( const mainStyle of Object.keys( mainStyleToMainStyleObject ) ) {

    const mainStyleObject = mainStyleToMainStyleObject[ mainStyle ];

    mainStyleObject.mainStyle = mainStyle;
}


export { mainStyleToMainStyleObject };