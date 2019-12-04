import React from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Acquainted from "./components/Acquainted/Acquainted";
import Technologies from "./components/Technologies/Technologies";
import Requirements from "./components/Requirements/Requirements";

import './App.scss';


function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Acquainted/>
        <Technologies/>
        <Requirements/>
    </div>
  );
}

export default App;
