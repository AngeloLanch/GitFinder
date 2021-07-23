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
  setUserGeneralData: React.Dispatch<React.SetStateAction<MainUserInfos>>;
}

export async function searchUser({
  user,
  token,
  setUserGeneralData,
}: SearchUser) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`, {
      headers: { Authorization: token },
    });

    setUserGeneralData(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
}
