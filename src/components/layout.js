import React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Header from "./header"

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 18px;
        font-size: 1.8rem;
        line-height: 1.5;
        font-family: 'Asap', sans-serif;
    }
    h1, h2, h3 {
        margin: 0;
        line-height: 1.5;
        font-family: 'Asap', sans-serif;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Gatsby Hotel</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
