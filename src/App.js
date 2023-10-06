// App.js
import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from './Routes/SearchPage'; // Import the new SearchPage component
import { connect } from 'react-redux';
import { fetchPokemon } from './actions'; 
import HomePage from './Routes/HomePage';
function App(props) {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/search" exact component={SearchPage}/>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps, {fetchPokemon})(App);

