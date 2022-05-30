import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #263238;
    color: #fff;
    padding: 0;
    margin: 0;
    font-family: monospace, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
  }
  footer {
    font-size: 0.8em;
    text-align: center;
  }
  main {
    padding: 1em 24em 4em;
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }
  @media screen and (max-width: 480px) {
  main {
    padding: 1em 2em;
    width: 100%;
  }
}
`

const theme = {
  colors: {
    primary: '#76FF03',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  ) 
}

export default MyApp
