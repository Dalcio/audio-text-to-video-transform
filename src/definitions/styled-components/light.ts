import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
    colors: {
        transparent: 'transparent',
        textColor: '#FFFFFF',
        headerBg: '#202024',
        cardsBg: '#272C34',
    },
    breakpoints: {
        small: '767px',
        medium: '767px',
    },
    borderRadius: {
        s: '8px',
        m: '14px',
        l: '16px',
    },
    spacing: {
        s: '16px',
        m: '24px',
        l: '28px',
        xl: '48px',
        xxl: '58px',
    },
};

export { light };
