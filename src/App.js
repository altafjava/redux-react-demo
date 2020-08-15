import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import BiscuitContainer from './components/BiscuitContainer';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <BiscuitContainer />
      </div>
    </Provider>
  );
}

export default App;
