import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: "Cairo";
  }
  a {
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 0.2em;
    height: 0.2em;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2em;
    outline: none;
    background-color: #294c60;
    :hover {
      opacity: 0.9;
    }
  }

  ::-webkit-scrollbar-track-piece {
    margin: 2em 0;
    border-radius: 2em;
  }
`;

export default GlobalStyle;
