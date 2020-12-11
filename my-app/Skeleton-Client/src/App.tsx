import React, {useEffect, useState} from 'react';
import {Blue6} from "./Blue6Interfaces";
import Logo from "./Logo.svg";
import './index.css'
import './App.css'


// const makeBlankBlue6 = (): Blue6 => ({
//     reportingDate: "",
//     callSign: "",
//     spDate: "",
//     rp: "",
//     cpLocation: "",
//     eta: "",
//     siUp: "",
//     narrative: "",
//     pointOfContact: "",
// });

// const createBlue6 = () => {
//     const [Blue6, setBlue6] = useState<Blue6>(makeBlankBlue6());
//}

export const App = () => {

const [inputText, setInputText] = useState<string>("")
    console.log(inputText)
    // console.log(setInputText(""))


    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 className="body">
                        Lancer Brigade Operations Center
                    </h1>
                    <img src={Logo} className="App-logo" alt="logo"/>

                    <label>
                        Reporting DTG
                        <input value = {inputText} onChange={(event) => {
                            setInputText(event.target.value)
                        }} />
                    </label>

                    <button onClick={() => alert(inputText)}>submit</button>
                </header>
            </div>
        </>
    )
}
