import { GlobalStyle } from "./styles/Global"
import { ThemeProvider } from "styled-components"
import theme from "./styles/Theme"
import { Banner } from "./components/Banner/Banner"

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <Banner />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
