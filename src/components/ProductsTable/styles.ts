import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3.5rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 600;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      background: var(--white);
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--white);
      border-radius: 0.25rem;

      &:first-child {
        font-weight: 600;
      }
    }
  }
`
