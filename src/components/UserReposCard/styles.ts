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
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    p {
      line-height: 20px;
      margin-left: 0.5rem;
    }
  }
`;
