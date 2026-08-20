import { createGlobalStyle } from "styled-components";
import { BASE_URL } from "../store/store";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Ubuntu";
        src: url("${BASE_URL}/fonts/Ubuntu-Regular.ttf") format("truetype"),
            url("${BASE_URL}/fonts/Ubuntu-Medium.ttf") format("truetype"),
            url("${BASE_URL}/fonts/Ubuntu-Bold.ttf") format("truetype");
        font-weight: normal;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 62.5%;
        font-family: "Ubuntu";
        width: 100%;
        min-height: 100vh;
    }    
`;