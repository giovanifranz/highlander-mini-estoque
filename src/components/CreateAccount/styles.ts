import style from "styled-components";

export const Container = style.div`
    h2 {
        font-size: 1.5rem;
        margin: 4rem 0 1.5rem 0;
    }
    p {
        font-size: 0.8rem;
        margin-top: 1rem;

        a {
            color: var(--red-light);
        }

        a:hover {
            text-decoration: underline;
        }
    }
`;
