import { Container } from './styles';

interface StarredRepoProps {
  starredReposData: {
    name: string;
    url: string;
  };
}

export function StarredReposCard({ starredReposData }: StarredRepoProps) {
  return (
    <Container>
      <div>
        <strong>Nome do repositório:</strong>
        <p>{starredReposData.name}</p>
      </div>
      <div>
        <strong>URL do repositório:</strong>
        <p>{starredReposData.url}</p>
      </div>
    </Container>
  );
}
