import React from 'react';
import { Provider } from 'react-redux';
import MainContainer from './src/navigation/MainContainer';
import { store } from './src/store';

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
