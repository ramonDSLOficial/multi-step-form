import type { DefaultTheme } from "styled-components";

// bold - 700; medium - 500; regular - 
// mobile 480
// tablet 481 - 769 
// laptop 769 - 1024
// desktop 1025 
export const theme: DefaultTheme = {
    colors: {
        primary: {
            first: "#02295aff",
            second: "#473dffff",
            third: "#adbeffff",
            fourth: "#bfe2fdff",
            fifth: "#ed3548ff"
        },
        neutral: {
            first: "#9699abff",
            second: "#d6d9e6ff",
            third: "#f0f6ffff",
            fourth: "#fafbffff",
            fifth: "#ffffffff"
        }
    },
    font: {
        weight: {
            primary: 700, 
            secundary: 500, 
            terciary: 500
        }
    }
};
