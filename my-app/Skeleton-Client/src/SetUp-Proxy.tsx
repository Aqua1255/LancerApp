import Logo from './Logo.svg';
import './App.css';
import React from "react";

function SetUpProxy() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Lancer Brigade Operations Center
                </h1>
                <img src={Logo} className="App-logo" alt="logo"/>

            </header>
        </div>
    );
}

export default SetUpProxy;
