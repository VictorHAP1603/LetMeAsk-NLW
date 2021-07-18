import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --gray-300: #f8f8f8;
        --gray-400: #a8a8a8; 
        --gray-700: #29292e; 


        --purple-450: #835afd;

        --white-200: #f8f8f8;
        --white: #fff;
    }

    body {
        background: var(--gray-300);
        color: var(--gray-700);
    }

    html {
        @media (max-width: 1028px) {
            font-size: 93.75%;
        }

        @media (max-width: 768px) {
            font-size: 87.95%;
        }
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }


`;
