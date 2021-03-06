import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.darkestWhite};
  }

  body, input, button, textarea {
    font: 400 1.6rem sans-serif;
    color: ${props => props.theme.colors.ink};
  }
`;

export default GlobalStyle;
