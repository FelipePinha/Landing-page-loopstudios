import { GlobalStyle } from "./styles/Global"
import { ThemeProvider } from "styled-components"
import theme from "./styles/Theme"
import { Banner } from "./components/Banner/Banner"
import { Interactive } from "./components/Interactive/Interactive"

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <Banner />
          <Interactive />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
