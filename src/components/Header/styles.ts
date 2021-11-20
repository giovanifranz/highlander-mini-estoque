import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);
`;  

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 90px;
        width: 220px;
    }

    button {
        font-size: 1rem;
        color: var(--white);
        background-color: var(--gray-dark);
        border: 0;
        padding: 0.2rem;
        border-radius: 0.25rem;
        height: 4rem;
        padding: 0 2rem;
        width: 12rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: filter 0.3s;
    }

    button:hover {
        filter: brightness(75%);
    }
`;