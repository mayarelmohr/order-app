import React, { Component } from 'react';
import Home from './pages/home';
import GlobalStyle from './utils/global_style';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Home />
      </div>
    );
  }
}

export default App;
