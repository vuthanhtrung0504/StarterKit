import React from 'react';
import { ThemeProvider } from 'react-native-picasso';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import theme from './theme';
import createStore from './redux/store';
import RootNavigation from './navigation/RootNavigation';
import { navigationRef } from './services/NavigationService';
import './services/TranslationService';

const App = () => {
  const { store, persistor } = createStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <RootNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
