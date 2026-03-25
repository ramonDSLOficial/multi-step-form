import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* @font-face {
        font-family: "Ubuntu";
        src: url("./public/fonts/Ubuntu-Regular.ttf") format("truetype"),
            url("./public/fonts/Ubuntu-Medium.ttf") format("truetype"),
            url("./public/fonts/Ubuntu-Bold.ttf") format("truetype");
        font-weight: normal;
    } */

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 62.5%;
        font-family: "Ubuntu", sans-serif;
        width: 100%;
        height: 100vh;
    }

    
`;