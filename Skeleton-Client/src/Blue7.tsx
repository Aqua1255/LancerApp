import React, {useState} from "react";
import './index.css'
import './App.css'
import {sendBlue7s} from "./Blue7API";

export const Blue7 = () => {
    const[checkOutReportingDateInputText, checkOutReportingDateSetInputText] = useState<string>("")
    const[checkOutCallSignInputText, checkOutCallSignSetInputText] = useState<string>("")
    const[checkOutRpDateInputText, checkOutRpDateSetInputText] = useState<string>("")
    const[checkOutLocInputText, checkOutLocSetInputText] = useState<string>("")
    const[accidentInputText, accidentSetInputText] = useState<string>("")
    const[checkOutEtaInputText, checkOutEtaSetInputText] = useState<string>("")
    const[checkOutSiInputText, checkOutSiSetInputText] = useState<string>("")

    return (
        <form>
            <h1 className="body">
                Complete Your Blue 7 Below:
            </h1>
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
                Sensitive Items Status:
                <input value={checkOutSiInputText} onChange={
                    (event) =>{checkOutSiSetInputText(event.target.value)}}/>
            </label>
        </div>
        <div className="checkButton-styling">
            <button type="submit" onClick={(e) => {
                const Blue7formData = {
                    checkOutReportingDateInput: checkOutReportingDateInputText,
                    checkOutCallSignInput: checkOutCallSignInputText,
                    checkOutRpDateInput: checkOutRpDateInputText,
                    checkOutLocInput: checkOutLocInputText,
                    accidentInput: accidentInputText,
                    checkOutEtaInput: checkOutEtaInputText,
                    checkOutSiInput: checkOutSiInputText,
                }
                sendBlue7s(Blue7formData)
            }
            }>submit</button>
        </div>
    </form>

    )}