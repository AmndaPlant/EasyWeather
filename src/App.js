import React, { Component } from 'react';
import './App.css';
import WeekContainer from './WeekContainer';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeekContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
