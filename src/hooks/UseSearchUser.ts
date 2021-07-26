import axios from 'axios';
import React from 'react';

interface MainUserInfos {
  avatar_url: string;
  name: string;
  followers: string;
  repos_url: string;
  starred_url: string;
}

interface SearchUser {
  user: string;
  token: string;
  setSearchedUserData: React.Dispatch<React.SetStateAction<MainUserInfos>>;
}

export async function searchUser({
  user,
  token,
  setSearchedUserData,
}: SearchUser) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`, {
      headers: { Authorization: token },
    });

    setSearchedUserData(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
}
