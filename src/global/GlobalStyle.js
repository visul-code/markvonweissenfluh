import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
html, body{
  background-color: ${({ theme }) => theme.colors.background};
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;

}
h1,h2,h3,h4,h5,h6{
  font-family: 'Playfair Display', serif;
}

h1{
  font-size: 8rem;
  font-weight: 400;
}
h2{
  font-size: 4.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
}

p{
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
}

.subtitle {
    font-size: 3.5rem;
    line-height: 4.5rem;
  }

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`;

export default GlobalStyle;
