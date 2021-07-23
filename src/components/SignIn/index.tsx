import { AuthContext } from 'context/Auth';
import { useContext, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

export function SignIn() {
  const { signIn } = useContext(AuthContext);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  useEffect(() => {
    const code = query.get('code');
    if (code) {
      signIn(code);
    }
  }, [query, signIn]);

  function handleSignIn() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;
  }

  return (
    <Container type="button" onClick={handleSignIn}>
      <FaGithub />
      Sign in
    </Container>
  );
}
