import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import People from './components/People'
import{ Nav} from './components/Nav'
function App() {
  return (
  
    <Provider store={store}>
      <Nav/>
        <People />
    </Provider>
  );
}

export default App;
