import { FormEvent, useContext, useState } from 'react';
import catFinder from 'assets/cat.png';
import { AuthContext } from 'context/Auth';

import { SignIn } from 'components/SignIn';

import { useHistory } from 'react-router-dom';
import { Container, SearchContainer } from './styles';

export function Home() {
  const { token } = useContext(AuthContext);
  const [userSearch, setuserSearch] = useState('teste');
  const history = useHistory();

  function handleText(searchText: string) {
    setuserSearch(searchText);
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    history.push(`/search/${userSearch}`);
  }

  return (
    <Container>
      <header>
        <h1>Git Finder</h1>
      </header>
      <div>
        <img src={catFinder} alt="cat" />
      </div>
      {token ? (
        <SearchContainer onSubmit={handleSearch}>
          <input
            type="text"
            required
            value={userSearch}
            onChange={e => handleText(e.target.value)}
            placeholder="Procurar por usuário..."
          />
          <button type="submit">Pesquisar</button>
        </SearchContainer>
      ) : (
        <SignIn />
      )}
    </Container>
  );
}
