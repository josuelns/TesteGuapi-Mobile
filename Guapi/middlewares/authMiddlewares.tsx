import AsyncStorage from '@react-native-async-storage/async-storage';

const retrieveToken = async () => {
  try {
    const token = await AsyncStorage.getItem('auth_token');
    if (token !== null) {
      return token;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const AuthMiddleware = async () => {
  return await retrieveToken();
};

export default AuthMiddleware;