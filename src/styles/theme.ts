import { DefaultTheme } from 'styled-components';

const fonts = {
    family: {
        spoqaHanSans: `'Noto Sans KR', sans-serif`,
        esamanru: `'Merriweather', serif`,
    },
    size: {
        h0: '32px',
        h1: '24px',
        h2: '20px',
        h3: '18px',
        body1: '16px',
        body2: '14px',
        body3: '12px',
    },
    weight: {
        light: 100,
        regular: 400,
        Medium: 700,
    },
};

const colors = {
    background: {
        backgroundColor: '#211134',
    },
    button: {
        Main: '#3150FE',
        white: '#FFFFFF',
    },
    font: {
        palePuple: '#452A7C',
        gray1: '#C1C1C1',
        white: '#FFFFFF',
    },
};
const Hexsize = {
    Hexsize: {
        size5: '5em',
        size10: '10em',
        size15: '15em',
        size20: '20em',
    },
};

const defalutTheme = {
    ...fonts,
    ...colors,
    ...Hexsize,
};

export const lightTheme: DefaultTheme = {
    ...defalutTheme,
};

export const darkTheme: DefaultTheme = {
    ...defalutTheme,
};
