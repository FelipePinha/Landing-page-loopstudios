import { GlobalStyle } from "./styles/Global"
import { ThemeProvider } from "styled-components"
import theme from "./styles/Theme"

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main>
          
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
