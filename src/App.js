import React from 'react';
import { Provider } from 'react-redux'
import { store } from './config/store'
import ProviderStored from './views/providerStored'
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <ProviderStored />
    </Provider>
  );
}
