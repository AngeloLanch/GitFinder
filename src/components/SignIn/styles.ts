import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background: #f1f1f1;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border: 1px solid gray;
  border-radius: 20px;
  align-items: center;
  display: flex;

  &:hover {
    background: #e7e7e7;
  }

  &:focus-within {
    background: #d7d7d7;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
