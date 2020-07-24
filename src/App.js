import React from "react"
import Helmet from "react-helmet"
import GlobalStyle from "./globalStyles"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=PT+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
