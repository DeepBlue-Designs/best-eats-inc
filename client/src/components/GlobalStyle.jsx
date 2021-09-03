import { createGlobalStyle } from 'styled-components'

//PLEASE CHANGE :D
const GlobalStyle = createGlobalStyle`
  body {
    background: #BAFFAE;
    font-family: 'Signika Negative', 'Signika Negative', Signika Negative;
    color: #2A2E2B;
  }

  button {
    background: #FFEF9C;
    font-family: 'Signika Negative', 'Signika Negative', Signika Negative;
    border: 2px solid #2A2E2B;
    border-radius: 7px;
    width: 100px;
    height: 30px;
    cursor: pointer;
  }

  a {
    background: #FFEF9C;
    font-family: 'Signika Negative', 'Signika Negative', Signika Negative;
    color: #2A2E2B;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid #2A2E2B;
    }
  }
`

export default GlobalStyle;