import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Loading } from './src/components/Loading';

import { THEME } from './src/styles/themes';
import { SignIn } from './src/screens/SingIn';
import { AuthContextProvider } from './src/context/AuthContext';
import { NewPool } from './src/screens/NewPool';
import { FindPool } from './src/screens/FindPool';
import { Pools } from './src/screens/Pools';
import { Routes } from './src/routes';

export default function App() {
  const [fontLoad] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {!fontLoad ? <Loading /> : <Routes />}
      </AuthContextProvider>
    </NativeBaseProvider >

  );
}


