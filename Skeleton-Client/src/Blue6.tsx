import React, {useState} from "react";
import './index.css'
import './App.css'
import {sendBlue6s} from "./Blue6API";

export const Blue6 = () => {
    const [reportingDateInputText, reportingDateSetInputText] = useState<string>("")
    const [callSignInputText, callSignSetInputText] = useState<string>("")
    const [spInputText, spSetInputText] = useState<string>("")
    const [rpInputText, rpSetInputText] = useState<string>("")
    const [gridMod1, setGridMod1] = useState<string>("")
    const [gridMod2, setGridMod2] =useState<string>("")
    const [cpInputText, cpSetInputText] = useState<string>("")
    const [cpInputTextUp, cpSetInputTextUp] =useState<string>("")
    const [etaInputText, etaSetInputText] = useState<string>("")
    const [sensitiveInputText, sensitiveSetInputText] = useState<string>("")
    const [narInputText, narSetInputText] = useState<string>("")
    const [contactInputText, contactSetInputText] = useState<string>("")



    return (
    <form>
        <h1>
            Complete Your Blue 6 Below:
        </h1>
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
            <label className= "grid-flow">
                Command Post Location:
                <div>
                <input className="mod1-input" maxLength={3} placeholder = "10T" value = {gridMod1} onChange={(event) => {
                    setGridMod1(event.target.value)}}/>
                <input className="mod2-input" maxLength={2} placeholder = "ET" value = {gridMod2} onChange={(event) => {
                    setGridMod2(event.target.value)}}/>
                <input className="grid-input" maxLength={5} placeholder = "01234" value={cpInputText} onChange={(event) => {
                    cpSetInputText(event.target.value)
                }}/>
                <input className="grid-input" maxLength={5} placeholder = "56789" value = {cpInputTextUp} onChange={(event) => {
                    cpSetInputTextUp(event.target.value)
                }}/>
                </div>

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
            <button type="submit" onClick={(e)=> {
                e.preventDefault()
                const Blue6formData = {
                    reportingDateInput : reportingDateInputText,
                    callSignInput : callSignInputText,
                    spDateInput : spInputText,
                    rpInput : rpInputText,
                    locInput : gridMod1 + " " + gridMod2 + " " + cpInputText + " " + cpInputTextUp,
                    etaInput : etaInputText,
                    siInput : sensitiveInputText,
                    narInput : narInputText,
                    pocInput: contactInputText
                }

                sendBlue6s(Blue6formData).then( () => {
                    window.location.reload()
                })

            }}>
                submit
            </button>

        </div>
    </form>
    )}