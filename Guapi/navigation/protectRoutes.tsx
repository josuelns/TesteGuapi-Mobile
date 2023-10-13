import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import ClientFormScreen from "../screens/client/formClient";
import ClientListScreen from "../screens/client/listClient";

const Stack = createStackNavigator();

const ProtectRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ClientList" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ClientList" component={ClientListScreen} />
                <Stack.Screen name="ClientForm" component={ClientFormScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default ProtectRoutes;