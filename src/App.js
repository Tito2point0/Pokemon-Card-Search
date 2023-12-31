// App.js
import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './Routes/SearchPage'; // Import the new SearchPage component
import { connect } from 'react-redux';
import { fetchPokemon } from './actions'; 
import HomePage from './Routes/HomePage';
function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/"  element={<HomePage/>} />
          <Route path="/search" element={<SearchPage/>}/>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps, {fetchPokemon})(App);

