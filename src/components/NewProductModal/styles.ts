import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    margin: 0.8rem 0;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: var(--gray-light);
    border: 1px solid #d7d7d7;
    font-size: 1rem;
    font-weight: 500;

    & + input {
      margin-top: 1rem;
    }
  }
`
