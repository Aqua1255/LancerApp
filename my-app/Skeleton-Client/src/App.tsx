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
// Hooks for form submissions
    const [reportingDateInputText, reportingDateSetInputText] = useState<string>("")
    const [callSignInputText, callSignSetInputText] = useState<string>("")
    const [spInputText, spSetInputText] = useState<string>("")
    const [rpInputText, rpSetInputText] = useState<string>("")
    const [cpInputText, cpSetInputText] = useState<string>("")
    const [etaInputText, etaSetInputText] = useState<string>("")
    const [sensitiveInputText, sensitiveSetInputText] = useState<string>("")
    const [narInputText, narSetInputText] = useState<string>("")
    const [contactInputText, contactSetInputText] = useState<string>("")
    const[checkOutReportingDateInputText, checkOutReportingDateSetInputText] = useState<string>("")
    const[checkOutCallSignInputText, checkOutCallSignSetInputText] = useState<string>("")
    const[checkOutRpDateInputText, checkOutRpDateSetInputText] = useState<string>("")
    const[checkOutLocInputText, checkOutLocSetInputText] = useState<string>("")
    const[accidentInputText, accidentSetInputText] = useState<string>("")
    const[checkOutEtaInputText, checkOutEtaSetInputText] = useState<string>("")
    const[checkOutSiInputText, checkOutSiSetInputText] = useState<string>("")





    return (

            <div className="background-container">
                <header className="App-header">
                    <h1 className="body">
                        Lancer Brigade Operations Center
                    </h1>
                </header>
                <img src={Logo} className="App-logo" alt="logo"/>

                <div className="form-container">
                    <form>
                        <div>
                            <label className="label-row">
                                Reporting Date Time Group:
                                <input value={reportingDateInputText} onChange={(event) => {
                                    reportingDateSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>
                        <div>
                            <label className="label-row">
                                Unit & Call Sign:
                                <input value={callSignInputText} onChange={(event) => {
                                    callSignSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>
                        <div>
                            <label className="label-row">
                                SP Date Time Group:
                                <input value={spInputText} onChange={(event) => {
                                    spSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>

                        <div>
                            <label className="label-row">
                                Estimated RP Date Time Group:
                                <input value={rpInputText} onChange={(event) => {
                                    rpSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>
                        <div>
                            <label className="label-row">
                                Command Post Location:
                                <input value={cpInputText} onChange={(event) => {
                                    cpSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>
                        <div>
                            <label className="label-row">
                                ETA to Continue Operations:
                                <input value={etaInputText} onChange={(event) => {
                                    etaSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>
                        <div>
                            <label className="label-row">
                                Sensitive Items Status:
                                <input value={sensitiveInputText} onChange={(event) => {
                                    sensitiveSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>
                        <div>
                            <label className="label-row">
                                One Sentence Narrative:
                                <input value={narInputText} onChange={(event) => {
                                    narSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>
                        <div>
                            <label className="label-row">
                                Contact Name and Phone #:
                                <input value={contactInputText} onChange={(event) => {
                                    contactSetInputText(event.target.value)
                                }}/>
                            </label>
                        </div>
                        <div className="checkButton-styling">
                        <button onClick={() => alert(reportingDateInputText + callSignInputText + spInputText
                            + rpInputText + cpInputText + etaInputText + sensitiveInputText + narInputText +
                            contactInputText)
                        }>check in
                        </button>
                        </div>
                    </form>
                    <form>
                        <div>
                            <label className="label-row">
                                Reporting Date Time Group:
                                <input value={checkOutReportingDateInputText} onChange={
                                    (event) =>{checkOutReportingDateSetInputText(event.target.value)}}/>
                            </label>
                            <label className="label-row">
                                Unit & Call Sign:
                                <input value={checkOutCallSignInputText} onChange={
                                    (event) =>{checkOutCallSignSetInputText(event.target.value)}}/>
                            </label>
                            <label className="label-row">
                                RP Date Time Group:
                                <input value={checkOutRpDateInputText} onChange={
                                    (event) =>{checkOutRpDateSetInputText(event.target.value)}}/>
                            </label>
                            <label className="label-row">
                                Command Post Location:
                                <input value={checkOutLocInputText} onChange={
                                    (event) =>{checkOutLocSetInputText(event.target.value)}}/>
                            </label>
                            <label className="label-row">
                                Accidents or SIGACTs:
                                <input value={accidentInputText} onChange={
                                    (event) =>{accidentSetInputText(event.target.value)}}/>
                            </label>
                            <label className="label-row">
                                ETA to Continue Operations:
                                <input value={checkOutEtaInputText} onChange={
                                    (event) =>{checkOutEtaSetInputText(event.target.value)}}/>
                            </label>
                            <label className="label-row">
                                Sensitive Item Status:
                                <input value={checkOutSiInputText} onChange={
                                    (event) =>{checkOutSiSetInputText(event.target.value)}}/>
                            </label>
                        </div>
                        <div className="checkButton-styling">
                        <button onClick={() => alert(checkOutReportingDateInputText + checkOutCallSignInputText + checkOutRpDateInputText
                            + checkOutLocInputText + accidentInputText + checkOutEtaInputText + checkOutSiInputText)
                        }>check out</button>
                        </div>
                    </form>
                </div>
        </div>
    )}
