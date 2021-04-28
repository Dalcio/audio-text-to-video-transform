// #region Global Imports
import "styled-components";
// #endregion Global Imports
type CommonColors = "transparent" | "darkGrey" | "blackGrey" | "white";

type ExtendedColors =
    | CommonColors
    | "toggleBorder"
    | "gradient"
    | "background"
    | "headerBg"
    | "cardsBg"
    | "textColor"
    | "dodgerBlue";

type BreakPoints = {
    small: string;
};

type BorderRadius = {
    s: string;
    m: string;
    l: string;
};

declare module "styled-components" {
    export interface BaseTheme {
        colors: Record<CommonColors, string>;
        breakpoints: Record<BreakPoints, string>;
        borderRadius: Record<BorderRadius, string>;
    }

    export interface DefaultTheme extends BaseTheme {
        colors: Record<ExtendedColors, string>;
    }
}
