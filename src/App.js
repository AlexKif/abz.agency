import React from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Acquainted from "./components/Acquainted/Acquainted";

import './App.scss';
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Acquainted/>
        <Technologies/>
    </div>
  );
}

export default App;
