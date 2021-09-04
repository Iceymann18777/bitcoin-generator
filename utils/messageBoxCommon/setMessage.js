import { setState } from '../../reduxX';
import delay from '../delay';


export default async ({

    message,
    timeout = 3000,

}) => {

    setState( [ 'messageBox', 'theMessage' ], message );

    await delay({ timeout });

    setState( [ 'messageBox', 'theMessage' ], '' );
};