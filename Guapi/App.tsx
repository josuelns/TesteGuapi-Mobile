import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './store/store';
import Navigation from './navigation/navigation';
import ToastProvider from './components/toast';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "#eee",
  };

  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={{ height: '100%' }}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Navigation/>
        </SafeAreaView>
        <ToastProvider/>
      </Provider>
      <Toast/>
    </>
  );
}


export default App;
