import React, { createContext } from 'react';
import { useState } from 'react';
import { getToken } from 'services/OAuth';
import { useCallback } from 'react';

interface MainUserInfos {
  avatar_url: string;
  name: string;
  followers: string;
  repos_url: string;
  starred_url: string;
}

interface StarredRepo {
  name: string;
  url: string;
}

interface AuthContextData {
  token: string;
  signIn(code: string | null): Promise<void>;

  userGeneralData: MainUserInfos;
  setUserGeneralData: React.Dispatch<React.SetStateAction<MainUserInfos>>;

  starredIsOpen: boolean;
  setStarredIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  starredRepoList: StarredRepo[];
  setStarredRepoList: React.Dispatch<React.SetStateAction<StarredRepo[]>>;

  reposIsOpen: boolean;
  setReposIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userRepoList: StarredRepo[];
  setUserRepoList: React.Dispatch<React.SetStateAction<StarredRepo[]>>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [userGeneralData, setUserGeneralData] = useState({} as MainUserInfos);
  const [token, setToken] = useState('');

  const [starredIsOpen, setStarredIsOpen] = useState(false);
  const [starredRepoList, setStarredRepoList] = useState<StarredRepo[]>([]);

  const [reposIsOpen, setReposIsOpen] = useState(false);
  const [userRepoList, setUserRepoList] = useState<StarredRepo[]>([]);

  const signIn = useCallback(async (code: string) => {
    const response = await getToken(code);
    const tokenRecived = response.data.access_token;

    if (tokenRecived) {
      setToken(tokenRecived);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        token,
        setUserGeneralData,
        userGeneralData,
        setStarredIsOpen,
        starredIsOpen,
        setStarredRepoList,
        starredRepoList,
        reposIsOpen,
        setReposIsOpen,
        userRepoList,
        setUserRepoList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
