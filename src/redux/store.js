import AsyncStorage from '@react-native-community/async-storage';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
