import React from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Acquainted from "./components/Acquainted/Acquainted";
import Technologies from "./components/Technologies/Technologies";
import Requirements from "./components/Requirements/Requirements";
import Users from "./components/Users/Users";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";

import './App.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <Banner/>
            <Acquainted/>
            <Technologies/>
            <Requirements/>
            <Users/>
            <Registration/>
            <Footer/>
        </div>
    );
}

export default App;


