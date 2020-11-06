import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux'
import MovieContainer from './components/MovieContainer';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <div>
            <Link to='/'>
              <h1>Movie Search App</h1>
            </Link>
            <MovieContainer />
          </div>
      </Router>
    </Provider>
  );
}

export default App;
