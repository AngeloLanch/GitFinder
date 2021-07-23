import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1024px;
  padding: 1rem;
  margin: 0 auto;

  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
`;

export const ImgContainer = styled.div`
  text-align: center;
  margin-right: 1rem;

  img {
    width: 8rem;
    max-width: 100%;
    height: auto;
  }
`;

export const SearchContainer = styled.form`
  width: 100%;
  display: flex;

  button {
    padding: 0.1rem 0.5rem;
  }

  input {
    padding: 0.1rem 0.5rem;
    margin-right: 0.5rem;
    width: 100%;
    border-radius: 5px;
    border: 1px solid;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  width: 100%;
`;
