import React, {useEffect, useState} from 'react';
import {Blue6} from "./Blue6Interfaces";
import Logo from "./Logo.svg";
import './index.css'
import './App.css'


const makeBlankBlue6 = (): Blue6 => ({
    reportingDate: "",
    callSign: "",
    spDate: "",
    rp: "",
    cpLocation: "",
    eta: "",
    siUp: "",
    narrative: "",
    pointOfContact: "",
});


export const App = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 className="body">
                        Lancer Brigade Operations Center
                    </h1>
                    <img src={Logo} className="App-logo" alt="logo"/>

                </header>
            </div>
        </>
    )
}
