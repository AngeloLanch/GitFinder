import React, { createContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState, ReactNode } from 'react';
import * as auth from 'services/auth';

interface AuthContextData {
  signed: boolean;
  // signIn(code: string | null): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  // async function signIn(code: string) {
  //   const response = await auth.SignIn(code);

  //   console.log('repsonse: ', response);
  // }

  return (
    <AuthContext.Provider value={{ signed: false }}>
      {children}
    </AuthContext.Provider>
  );
};
