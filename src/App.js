import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import People from './components/People'
function App() {
  return (
  
    <Provider store={store}>
        <People />
    </Provider>
  );
}

export default App;
