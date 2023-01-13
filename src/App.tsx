import { GlobalStyle } from "./styles/Global"
import { ThemeProvider } from "styled-components"
import theme from "./styles/Theme"
import { Banner } from "./components/Banner/Banner"
import { Interactive } from "./components/Interactive/Interactive"
import { Gallery } from "./components/Gallery/Gallery"

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <Banner />
          <Interactive />
          <Gallery />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
