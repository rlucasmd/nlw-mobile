import { createContext, ReactNode, useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
}

interface AuthContextProps {
  signIn: () => Promise<void>;
  user: UserProps;
  isUserLoading: boolean;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);



function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isUserLoading, setIsUserLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '77761974061-n4312c208hnqomj43cikvngb93v9ee2p.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['email', 'profile']
  });
  async function singInWithGoogle(accessToken: string) {
    console.log('Token => ' + accessToken);
  }
  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken)
      singInWithGoogle(response.authentication.accessToken);

  }, [response]);

  async function signIn() {
    try {
      setIsUserLoading(true);
      await promptAsync();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
    return;
  }
  return (
    <AuthContext.Provider
      value={{ signIn, user, isUserLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, AuthContextProps, AuthContext };