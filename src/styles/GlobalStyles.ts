import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .App {
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    background: #fefefe;

    *::-webkit-scrollbar {
      width: 0.5rem;
      height: 5px;
      margin-left: 16px;
    }

    *::-webkit-scrollbar-track {
      background: #f2f2f2
    }

    *::-webkit-scrollbar-thumb {
      background: #e0e0e0;
    }

    *::-webkit-scrollbar-thumb:hover {
      background: #d0d0d0;
    }
  }

  body, input, textarea, button {
    font-family: STIX Two Math;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
