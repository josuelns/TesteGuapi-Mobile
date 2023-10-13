import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/login"

const Stack = createStackNavigator();

const PublicRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default PublicRoutes;