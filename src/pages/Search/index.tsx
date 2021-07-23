import { AuthContext } from 'context/Auth';
import { FormEvent, useContext, useState } from 'react';
import catFinder from 'assets/cat.png';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { UserCard } from 'components/userCard';
import { StarredReposCard } from 'components/StarredReposCard';

import { getStarredRepos } from 'hooks/UseStarredRepos';

import { searchUser } from 'hooks/UseSearchUser';
import { UserReposCard } from 'components/UserReposCard';
import { getUserRepos } from 'hooks/UseUserRepos';
import {
  Container,
  SearchContainer,
  Content,
  Header,
  ImgContainer,
} from './styles';

interface Params {
  user: string;
}

export function Search() {
  const { user } = useParams<Params>();
  const {
    setUserGeneralData,
    starredIsOpen,
    token,
    starredRepoList,
    setStarredRepoList,
    userRepoList,
    setUserRepoList,
    reposIsOpen,
  } = useContext(AuthContext);
  const [userSearch, setUserSearch] = useState('');

  function handleText(searchText: string) {
    setUserSearch(searchText);
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    searchUser({ setUserGeneralData, user, token });
  }

  useEffect(() => {
    searchUser({ setUserGeneralData, user, token });
    getStarredRepos({ user, token, setStarredRepoList });
    getUserRepos({ user, token, setUserRepoList });
  }, [setStarredRepoList, setUserGeneralData, setUserRepoList, token, user]);

  return (
    <Container onSubmit={handleSearch}>
      <Header>
        <ImgContainer>
          <Link to={{ pathname: '/' }}>
            <img src={catFinder} alt="cat playing with a ball" />
          </Link>
        </ImgContainer>
        <SearchContainer onSubmit={handleSearch}>
          <input
            type="text"
            value={userSearch}
            onChange={e => handleText(e.target.value)}
            placeholder="Procurar por usuário..."
          />
          <Link to={`${userSearch}`}>
            <button type="submit">Pesquisar</button>
          </Link>
        </SearchContainer>
      </Header>
      <Content>
        <UserCard />
      </Content>
      {starredIsOpen && (
        <Content>
          <strong>Reposisótios favoritados: </strong>
          {starredRepoList.map(starredRepo => (
            <StarredReposCard
              key={starredRepo.name}
              starredReposData={starredRepo}
            />
          ))}
        </Content>
      )}
      {reposIsOpen && (
        <Content>
          <strong>Reposisótios do usuário: </strong>
          {userRepoList.map(userRepo => (
            <UserReposCard key={userRepo.name} userRepoData={userRepo} />
          ))}
        </Content>
      )}
    </Container>
  );
}
