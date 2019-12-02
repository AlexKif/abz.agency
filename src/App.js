import React from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Acquainted from "./components/Acquainted/Acquainted";

import './App.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Acquainted/>
    </div>
  );
}

export default App;
