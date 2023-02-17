import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Content from './components/pages/Content';
import Sheets from './components/pages/Sheets';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Content" element={<Content />} />
            <Route path="/Sheets" element={<Sheets />} />
            {/* <Route path="/ArmyCounterPage" element={<ArmyCounterPage />} /> */}
          </Routes>
        </HashRouter>
      </div>
    )
  }
}

export default App