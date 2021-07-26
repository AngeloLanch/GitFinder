import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
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
  }
`;

export const SearchContainer = styled.form`
  button {
    padding: 0.1rem 0.5rem;
  }

  input {
    padding: 0.1rem 0.5rem;
    margin-right: 0.5rem;
    border-radius: 5px;
    border: 1px solid;
  }

  button {
    padding: 0.1rem 0.5rem;
    border-radius: 2px;
    border: 1px solid rgb(128 128 128);
  }
`;
