import { Container } from './styles';

interface UserRepoProps {
  userRepoData: {
    name: string;
    url: string;
  };
}

export function UserReposCard({ userRepoData }: UserRepoProps) {
  return (
    <Container>
      <div>
        <strong>Nome do repositório:</strong>
        <p> {userRepoData.name}</p>
      </div>
      <div>
        <strong>URL do repositório:</strong>
        <p>{userRepoData.url}</p>
      </div>
    </Container>
  );
}
