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

const [reportingDateInputText, reportingDateSetInputText] = useState<string>("")
    // console.log(reportingDateInputText)
    // console.log(reportingDateSetInputText(""))


    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 className="body">
                        Lancer Brigade Operations Center
                    </h1>
                    <img src={Logo} className="App-logo" alt="logo"/>

                    <label>
                        Reporting Date Time Group:
                        <input value = {reportingDateInputText} onChange={(event) => {
                            reportingDateSetInputText(event.target.value)
                        }} />
                    </label>
                    <label>
                        Unit & Call Sign:
                        <input/>
                    </label>
                    <label>
                        SP Date Time Group:
                        <input/>
                    </label>
                    <label>
                        Estimated RP Date Time Group:
                        <input/>
                    </label>
                    <label>
                        Command Post Location:
                        <input/>
                    </label>
                    <label>
                        ETA to Continue Operations:
                        <input/>
                    </label>
                    <label>
                        Sensitive Items Status:
                        <input/>
                    </label>
                    <label>
                        One Sentence Narrative:
                        <input/>
                    </label>
                    <label>
                        Contact Name and Phone #:
                        <input/>
                    </label>

                    <button onClick={() => alert(reportingDateInputText)}>submit</button>
                </header>
            </div>
        </>
    )
}
