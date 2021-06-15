import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
html, body{
  background-color: ${({ theme }) => theme.colors.background};
 font-family: 'IBM Plex Mono', monospace;

}


* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`;

export default GlobalStyle;
