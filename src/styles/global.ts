import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;

    --red: #f2594e;
    --red-light: #f29c96;

    --yellow: #f2c94e;
    --yellow-light: #f5df9f;

    --green: #98bf49;
    --green-light: #cbe595;

    --blue: #557cf2;
    --blue-light:#a2b8fa;

    --gray-light: #f7faff;
    --gray: #6f7380;
    --gray-dark: #4e5159;
    --gray-darker: #31343b;
}

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html {
    @media (min-width: 1080px) {
        font-size: 93.75%; 
    }

    @media (min-width: 1080px) {
        font-size: 87.5%; 
    }
}

body {
    background: var(--gray-darker);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--gray-darker);
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}

.react-modal-content {
    background-color: var(--white);
    width: 100%;
    max-width: 600px;
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    color: var(--red);
    font-size: 2rem;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(70%);
    }
}

.button {
    width: 100%;
    margin-top: 4rem;
    height: 50px;
    border: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--green);
    color: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    &:not(:disabled):hover {
        filter: brightness(90%);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
}
`;
