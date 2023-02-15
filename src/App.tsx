import Router from 'Router';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import { useRecoilValue } from 'recoil';
import { themeModeAtom } from 'stores/atoms';

function App() {
    const isDarkMode = useRecoilValue(themeModeAtom);
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    );
}

export default App;
