import { DefaultTheme } from 'styled-components';
import { light } from './light';

const dark: DefaultTheme = {
    ...light,
    colors: {
        ...light.colors,
        background: '#121214',
        textColor: '#FFFFFF',
    },
};

export { dark };
