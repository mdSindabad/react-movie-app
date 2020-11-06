import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux'
import MovieContainer from './components/MovieContainer';
import './App.css'

function App() {
  return (
    <Provider store={store}>
        <div>
          <h1>Movie Search App</h1>
          <MovieContainer />
        </div>
    </Provider>
  );
}

export default App;
