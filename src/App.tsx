import Router from 'Router'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    )
}

export default App
