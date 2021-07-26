import axios from 'axios';
import React from 'react';

type StarredRepo = {
  name: string;
  url: string;
};

interface GetStarredProps {
  user: string;
  token: string;
  setStarredRepoList: React.Dispatch<React.SetStateAction<StarredRepo[]>>;
}

export async function getStarredRepos({
  user,
  token,
  setStarredRepoList,
}: GetStarredProps) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${user}/starred`,
      {
        headers: { Authorization: token },
      },
    );

    setStarredRepoList(response.data);
    return response.data;
  } catch (err) {
    setStarredRepoList([]);
    return err;
  }
}
