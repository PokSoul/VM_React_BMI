import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.primary};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle
