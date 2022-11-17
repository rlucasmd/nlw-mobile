import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SingIn';
import { useAuth } from "../hooks/useAuth";
import { Box } from "native-base";


function Routes() {
  const { user } = useAuth();
  return (
    <Box flex={1} bg="gray.900">
      <NavigationContainer>
        {user.name ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
    </Box>
  );
}

export { Routes };