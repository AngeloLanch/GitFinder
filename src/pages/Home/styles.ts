import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    margin: 3rem 0 5rem;
  }

  div {
    text-align: center;
    margin: 1rem;

    img {
      width: 40rem;
      max-width: 100%;
      height: auto;
    }

    p {
      margin: 2rem 0 0;
    }
  }
`;
