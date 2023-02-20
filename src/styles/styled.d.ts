import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        family: {
            spoqaHanSans: string;
            esamanru: string;
        };
        size: {
            h0: string;
            h1: string;
            h2: string;
            h3: string;
            body1: string;
            body2: string;
            body3: string;
        };
        weight: {
            light: number;
            regular: number;
            Medium: number;
        };
        background: {
            backgroundColor: string;
        };
        button: {
            Main: string;
        };
        font: {
            palePuple: string;
            gray1: string;
            white: string;
        };
    }
}
