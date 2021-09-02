import { createGlobalStyle } from 'styled-components'

//PLEASE CHANGE :D
const GlobalStyle = createGlobalStyle`
  body {
    background: hotpink;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    color: cyan;
  }

  button {
    background: limegreen;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    &:hover {
      background: #ecf900;
      color: black;
    }
  }

  a {
    color: yellow;
    &:hover {
      color: cyan;
    }
  }
`

export default GlobalStyle;