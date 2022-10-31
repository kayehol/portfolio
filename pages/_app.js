import { createGlobalStyle, ThemeProvider } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: monospace, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    background-color: #0f0f0f;
    width: 100vw;
    height: 100vh;
    color: #fff;
  }
  a {
    color: #fff;
    text-decoration: underline;
    font-style: italic;
  }
  a :hover {
    color: #a6ff00;
  }
  footer {
    text-align: center;
    color: #fff;
    font-size: 12px;
    position: absolute;
    left: 0;
    bottom: 5px;
  }
  * {
    box-sizing: border-box;
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
