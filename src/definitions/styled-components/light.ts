import { DefaultTheme } from "styled-components";
import { common } from "./common";

const light: DefaultTheme = {
    ...common,
    colors: {
        ...common.colors,
        toggleBorder: "#ABB7C4",
        gradient: "linear-gradient(#39598A, #79D7ED)",
        background: "#121214",
        cardsBg: "#FFFFFF",
        textColor: "#000000",
        dodgerBlue: "#007BFF",
    },
};

export { light };
