import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #BAFFAE;
    font-family: 'Signika Negative', 'Signika Negative', Signika Negative;
    color: #2A2E2B;
    margin: 0;
    padding: 0;
  }

  nav a {
    font-family: 'Signika Negative', 'Signika Negative', Signika Negative;
    color: #2A2E2B;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid #2A2E2B;
    }
  }

  button {
    font-family: 'Signika Negative', 'Signika Negative', Signika Negative;
    border: 0px solid #2A2E2B;
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 6px 0px;
    border-radius: 5px;
    padding: 5px 22px;
    cursor: pointer;
    &:hover {
      background: #FFEF9C;
    }
  }
`

export default GlobalStyle;