import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NewPool } from "../screens/NewPool";
import { Pools } from "../screens/Pools";
import { PlusCircle, SoccerBall } from 'phosphor-react-native';
import { useTheme } from "native-base";
import { FindPool } from "../screens/FindPool";
import { Details } from "../screens/Details";

const { Navigator, Screen } = createBottomTabNavigator();
const size = 24;

function AppRoutes() {
  const { colors, sizes } = useTheme();
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: colors.yellow[500],
      tabBarInactiveTintColor: colors.gray[300],
      tabBarStyle: {
        position: 'absolute',
        height: 87,
        borderTopWidth: 0,
        backgroundColor: colors.gray[800]
      },
      tabBarItemStyle: {
        position: 'relative'
      }
    }}>
      <Screen
        name="newPool"
        component={NewPool}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
          tabBarLabel: 'Novo bolão'
        }}
      />
      <Screen
        name="pools"
        component={Pools}
        options={{
          tabBarIcon: ({ color }) => <SoccerBall color={color} size={size} />,
          tabBarLabel: 'Meus bolões'
        }}
      />
      <Screen
        name="findPool"
        component={FindPool}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="details"
        component={Details}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}

export { AppRoutes };