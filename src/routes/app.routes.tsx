import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '@screens/Login'
import  Register  from '@screens/Register'
import  RecoveryPassword  from '@screens/RecoveryPassword'
import { Home } from '@screens/Home'
import ChangePassword from '@screens/ChangePassword'
import RecoveryMatricula from '@screens/RecoveryMatricula'
import CodeView from '@screens/CodeView'
import Birthday from '@screens/Birthday'
import { Perfil } from '@screens/Perfil'
import { Splash } from '@screens/Splash'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
            name="splash"
            component={Splash}
            />
            <Screen
            name="login"
            component={Login}
            />
            <Screen
            name='birthday'
            component={Birthday}/>
            <Screen
            name="register"
            component={Register}
            />
            <Screen
            name="recoveryPassword"
            component={RecoveryPassword}
            />
            <Screen
            name="home"
            component={Home}
            />
            <Screen
            name="changePassword"
            component={ChangePassword}
            />
            <Screen
            name="recoveryMatricula"
            component={RecoveryMatricula}
            />
            <Screen
            name="codeView"
            component={CodeView}
            />
            <Screen
            name="perfil"
            component={Perfil}
            />
        </Navigator>
    )
}