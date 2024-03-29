import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
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
            white: string;
            Before: string;
            Select: string;
        };
        font: {
            palePuple: string;
            gray1: string;
            white: string;
        };
        Hexsize: {
            size5: string;
            size10: string;
            size15: string;
            size20: string;
        };
    }
}
