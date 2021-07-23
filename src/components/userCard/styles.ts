import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid;
  border-radius: 5px;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  max-width: 8rem;
  flex-direction: row;
  border-radius: 2px;

  img {
    width: 100%;
  }
`;

export const UserContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-items: center;

  p {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 100%;

    p {
    }
  }
`;

export const UserInfos = styled.div`
  justify-content: space-around;
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  button {
    padding: 0.1rem 0.5rem;
    border-radius: 2px;
    border: 1px solid rgb(128 128 128);
  }

  button + button {
    margin-top: 0.5rem;
  }
`;
