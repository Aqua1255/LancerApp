import React, {useState} from "react";
import '../index.css'
import '../App.css'
import {sendBlue7s} from "./Blue7API";
import {useHistory} from "react-router-dom";
import { Button } from "reactstrap";

export const Blue7 = () => {
    const history = useHistory();
    const[checkOutReportingDateInputText, checkOutReportingDateSetInputText] = useState<string>("")
    const[checkOutCallSignInputText, checkOutCallSignSetInputText] = useState<string>("")
    const[checkOutRpDateInputText, checkOutRpDateSetInputText] = useState<string>("")
    const[checkOutMod1, checkOutSetMod1] = useState<string>("")
    const[checkOutMod2, checkOutSetMod2] = useState<string>("")
    const[checkOutLocInputText, checkOutLocSetInputText] = useState<string>("")
    const[checkOutLocUpInputText, checkOutLocUpSetInputText] = useState<string>("")
    const[accidentInputText, accidentSetInputText] = useState<string>("")
    const[checkOutEtaInputText, checkOutEtaSetInputText] = useState<string>("")
    const[checkOutSiInputText, checkOutSiSetInputText] = useState<string>("")

    return (
        <form className="background-container">
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
                <input className="mod1-input" maxLength={3} placeholder = "10T" value = {checkOutMod1} onChange={(event) => {
                    checkOutSetMod1(event.target.value)}}/>
                <input className="mod2-input" maxLength={2} placeholder = "ET" value = {checkOutMod2} onChange={(event) => {
                    checkOutSetMod2(event.target.value)}}/>
                <input  className="grid-input" maxLength={5} placeholder = "01234" value={checkOutLocInputText} onChange={
                    (event) =>{checkOutLocSetInputText(event.target.value)}}/>
                <input className="grid-input" maxLength={5} placeholder = "56789" value={checkOutLocUpInputText} onChange={
                    (event) =>{checkOutLocUpSetInputText(event.target.value)}}/>

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
            <Button type="submit" onClick={(e) => {
                const Blue7formData = {
                    checkOutReportingDateInput: checkOutReportingDateInputText,
                    checkOutCallSignInput: checkOutCallSignInputText,
                    checkOutRpDateInput: checkOutRpDateInputText,
                    checkOutLocInput: checkOutMod1 + " " + checkOutMod2 + " " + checkOutLocInputText + " " + checkOutLocUpInputText,
                    accidentInput: accidentInputText,
                    checkOutEtaInput: checkOutEtaInputText,
                    checkOutSiInput: checkOutSiInputText,
                }
                sendBlue7s(Blue7formData)
                history.push("/")
            }
            }>submit</Button>
        </div>
    </form>

    )}