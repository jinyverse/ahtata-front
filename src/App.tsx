import Router from '@/components/router';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import { useRecoilValue } from 'recoil';
import { themeModeAtom } from '@/stores/userAtoms';
import '@/api/axios.interceptors';

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
