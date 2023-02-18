import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background: {
            normal: string;
            primary: string;
        };
        fontColor: {
            normal: string;
        };
    }
}
