import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: {
                first: string,
                second: string,
                third: string,
                fourth: string,
                fifth: string,
            },
            neutral: {
                first: string,
                second: string,
                third: string,
                fourth: string,
                white: string,
                black: string
            },
        },
        font: {
            weight: {
                primary: number,
                secundary: number,
                terciary: number,
            }
        }
    }
}