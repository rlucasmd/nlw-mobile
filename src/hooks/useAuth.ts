import { useContext } from 'react';

import { AuthContext, AuthContextProps } from '../context/AuthContext';

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth };