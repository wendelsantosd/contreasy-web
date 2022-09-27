import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: 0;
        list-style: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        overflow-x: hidden;
    }

    :root {
      --white: #ffffff;
      --yellow-600: #ffbc0d;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    body {
        background: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;