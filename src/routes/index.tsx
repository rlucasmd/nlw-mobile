import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from './app.routes';


function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes></AppRoutes>
    </NavigationContainer>
  );
}

export { Routes };