import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '@screens/Splash';
import { Login } from '@screens/Login';
import { Register } from '@screens/Register';
import { RMPassword } from '@screens/RMPassword';
import { Home } from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
            name="login"
            component={Login}
            />
            <Screen
            name="splash"
            component={Splash}
            />
            <Screen
            name="register"
            component={Register}
            />
            <Screen
            name="rMPassword"
            component={RMPassword}
            />
            <Screen
            name="home"
            component={Home}
            />
        </Navigator>
    )
}