import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  border: none;
  background: #f1f1f1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  align-items: center;
  display: flex;

  svg {
    margin-right: 0.5rem;
  }
`;
