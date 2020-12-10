import React, {useEffect, useState} from 'react';
import {Blue6} from "./Blue6API";
import Logo from "./Logo.svg";


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
                    <h1>
                        Lancer Brigade Operations Center
                    </h1>
                    <img src={Logo} className="App-logo" alt="logo"/>

                </header>
            </div>
        </>
    )
}
