import axios from 'axios';
import React from 'react';

type userRepo = {
  name: string;
  url: string;
};

interface GetUserReposProps {
  user: string;
  token: string;
  setUserRepoList: React.Dispatch<React.SetStateAction<userRepo[]>>;
}

export async function getUserRepos({
  user,
  token,
  setUserRepoList,
}: GetUserReposProps) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`,
      {
        headers: { Authorization: token },
      },
    );

    setUserRepoList(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
}
