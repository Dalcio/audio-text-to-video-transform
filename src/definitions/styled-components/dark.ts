import { DefaultTheme } from 'styled-components';
import { common } from './common';

const dark: DefaultTheme = {
    ...common,
    colors: {
        ...common.colors,
        toggleBorder: '#556678',
        gradient: 'linear-gradient(#091236, #1E215D)',
        background: '#121214',
        cardsBg: '#1A1C22',
        textColor: '#FFFFFF',
        dodgerBlue: '#0062CC',
    },
};

export { dark };
