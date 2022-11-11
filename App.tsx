import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Loading } from './src/components/Loading';

import { THEME } from './src/styles/themes';
import { SignIn } from './src/screens/SingIn';
import { AuthContextProvider } from './src/context/AuthContext';

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
        {!fontLoad ? <Loading /> : <SignIn />}
      </AuthContextProvider>
    </NativeBaseProvider >

  );
}


