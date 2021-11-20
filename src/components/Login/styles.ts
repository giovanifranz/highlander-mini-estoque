import styled from "styled-components";

export const HandleCreateAccountButton = styled.div`
    margin-top: 4rem;
    height: 50px;
    border: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--red);
    color: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    #GoogleIcon {
        margin-right: 1rem;
    }

    transition: filter 0.2s;
    &:hover {
        filter: brightness(90%);
    }
`;

export const Separator = styled.div`
  font-size: 0.8rem;
  color: var(--gray-dark);

  margin: 2rem 0;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background-color: var(--gray-dark);
    margin-right: 1rem;
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: var(--gray-dark);
    margin-left: 1rem;
  }
`;