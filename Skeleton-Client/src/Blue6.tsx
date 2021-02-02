import React, {useState} from "react";
import './index.css'
import './App.css'
import {sendBlue6s} from "./Blue6API";

export const Blue6 = () => {
    const [reportingDateInputText, reportingDateSetInputText] = useState<string>("")
    const [callSignInputText, callSignSetInputText] = useState<string>("")
    const [spInputText, spSetInputText] = useState<string>("")
    const [rpInputText, rpSetInputText] = useState<string>("")
    const [cpInputText, cpSetInputText] = useState<string>("")
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
            <button type="submit" onClick={(e)=> {
                const Blue6formData = {
                    reportingDateInput : reportingDateInputText,
                    callSignInput : callSignInputText,
                    spDateInput : spInputText,
                    rpInput : rpInputText,
                    locInput : cpInputText,
                    etaInput : etaInputText,
                    siInput : sensitiveInputText,
                    narInput : narInputText,
                    pocInput: contactInputText
                }

                sendBlue6s(Blue6formData)
                window.location.reload()

            }}>
                submit
            </button>

        </div>
    </form>
    )}