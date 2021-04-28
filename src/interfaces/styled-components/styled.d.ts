import 'styled-components';

type CommonColors =
    | 'transparent'
    | 'background'
    | 'headerBg'
    | 'cardsBg'
    | 'textColor';

type BreakPoints = {
    small: string;
    medium: string;
};

type BorderRadius = {
    s: string;
    m: string;
    l: string;
};

type Spacing = {
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Record<CommonColors, string>;
        breakpoints: Record<BreakPoints, string>;
        borderRadius: Record<BorderRadius, string>;
        spacing: Record<Spacing, string>;
    }
}
