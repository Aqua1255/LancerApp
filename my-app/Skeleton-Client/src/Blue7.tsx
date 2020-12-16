import React, {useState} from "react";
import './index.css'
import './App.css'

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
            <button onClick={() => alert(checkOutReportingDateInputText + checkOutCallSignInputText + checkOutRpDateInputText
                + checkOutLocInputText + accidentInputText + checkOutEtaInputText + checkOutSiInputText)
            }>check out</button>
        </div>
    </form>

    )}