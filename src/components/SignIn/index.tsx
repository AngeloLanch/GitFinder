import { AuthContext } from 'context/Auth';
import { useContext, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

export function SignIn() {
  return (
    <Container to="/login/github">
      <FaGithub />
      Sign in
    </Container>
  );
}
