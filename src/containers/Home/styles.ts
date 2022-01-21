import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    color: var(--white);
    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 7.5rem 5rem;

    img {
      max-width: 320px;
    }

    strong {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 3rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
    }
  }

  section {
    flex: 8;
    background-color: var(--blue);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  & > img {
    align-items: center;
  }

  form {
    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      background-color: var(--gray-light);
      border: 1px solid #d7d7d7;
      font-size: 1rem;
      font-weight: 500;

      & + input {
        margin-top: 1rem;
      }
    }

    button {
      margin-top: 1rem;
    }

    button,
    input {
      width: 100%;
    }
  }
`
