import { createContext, ReactNode } from "react";
import * as AuthSession from 'expo-auth-session';

interface UserProps {
  name: string;
  avatarUrl: string;
}

interface AuthContextProps {
  signIn: () => Promise<void>;
  user: UserProps;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);


function AuthContextProvider({ children }: AuthContextProviderProps) {
  const uri = AuthSession.makeRedirectUri({ useProxy: true });
  console.log(uri)
  async function signIn() {
    console.log('Alo');
    return;
  }
  return (
    <AuthContext.Provider
      value={{ signIn, user: { name: 'Ranieri', avatarUrl: 'https://github.com/ranieri3232.png' } }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, AuthContextProps, AuthContext };