import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import catFinder from 'assets/cat.png';
import { AuthContext } from 'context/Auth';

import { SignIn } from 'components/SignIn';

import { Container } from './styles';

export function Home() {
  const { signed } = useContext(AuthContext);

  return (
    <Container>
      <header>
        <h1>Git Finder</h1>
      </header>
      <div>
        <img src={catFinder} alt="cat" />
        <p>Para realizar a pesquisa, conexe-se ao seu GitHub</p>
      </div>
      <SignIn />
    </Container>
  );
}
