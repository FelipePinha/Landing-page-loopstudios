import { GlobalStyle } from "./styles/Global"
import { ThemeProvider } from "styled-components"
import theme from "./styles/Theme"
import { Banner } from "./components/Banner/Banner"
import { Interactive } from "./components/Interactive/Interactive"
import { Gallery } from "./components/Gallery/Gallery"
import { Footer } from "./components/Footer/Footer"

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
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
