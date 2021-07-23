import { FormEvent, useContext, useState } from 'react';
import catFinder from 'assets/cat.png';
import { AuthContext } from 'context/Auth';

import { SignIn } from 'components/SignIn';

import { Link } from 'react-router-dom';
import { Container, SearchContainer } from './styles';

export function Home() {
  const { token } = useContext(AuthContext);
  const [userSearch, setuserSearch] = useState('teste');

  function handleText(searchText: string) {
    setuserSearch(searchText);
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Container>
      <header>
        <h1>Git Finder</h1>
      </header>
      <div>
        <img src={catFinder} alt="cat" />
        <p>Para realizar a pesquisa, se conecte ao seu GitHub</p>
      </div>
      {token ? (
        <SearchContainer onSubmit={handleSearch}>
          <input
            type="text"
            value={userSearch}
            onChange={e => handleText(e.target.value)}
            placeholder="Procurar por usuário..."
          />
          <Link to={`/search/${userSearch}`}>
            <button type="submit">Pesquisar</button>
          </Link>
        </SearchContainer>
      ) : (
        <SignIn />
      )}
    </Container>
  );
}
