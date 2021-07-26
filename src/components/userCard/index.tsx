import { AuthContext } from 'context/Auth';
import { useContext } from 'react';
import {
  Container,
  ImageContainer,
  UserContainer,
  ButtonsContainer,
  UserInfos,
} from './styles';

export function UserCard() {
  const {
    searchedUserData,
    setStarredIsOpen,
    starredIsOpen,
    setReposIsOpen,
    reposIsOpen,
  } = useContext(AuthContext);

  function handleStarredRepos() {
    setStarredIsOpen(!starredIsOpen);
  }

  function handleUserRepos() {
    setReposIsOpen(!reposIsOpen);
  }

  return (
    <Container>
      <ImageContainer>
        <img src={searchedUserData.avatar_url} alt="cat" />
      </ImageContainer>
      <UserContainer>
        <UserInfos>
          <p>
            <strong>Nome:</strong>
            <br />
            {searchedUserData.name}
          </p>
          <p>
            <strong>Followers:</strong>
            <br />
            {searchedUserData.followers}
          </p>
        </UserInfos>
        <ButtonsContainer>
          <button type="button" onClick={handleStarredRepos}>
            Repos favoritos
          </button>
          <button type="button" onClick={handleUserRepos}>
            Meus Repos
          </button>
        </ButtonsContainer>
      </UserContainer>
    </Container>
  );
}
