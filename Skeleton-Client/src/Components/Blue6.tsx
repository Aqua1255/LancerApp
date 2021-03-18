import React, {useState} from "react";
import '../index.css'
import '../App.css'
import {sendBlue6s} from "./Blue6API";
import { useHistory } from "react-router-dom";
import {Button, Col, Form, FormGroup, Input, Row} from "reactstrap";
import {Label} from "reactstrap/lib";

export const Blue6 = () => {
    const history = useHistory();
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
    const[archivedSelect, setArchivedSelect] = useState<boolean>(false)



    return (
    <Form className="p-4">

    <FormGroup row className="mt-3">
        <Label sm={4}>Reporting Date Time Group</Label>
        <Col md={6}>
            <Input value={reportingDateInputText} onChange={(event) => {
                reportingDateSetInputText(event.target.value)
            }}/>
        </Col>
    </FormGroup>
        <FormGroup row>
            <Label sm={4}>Unit and Call Sign</Label>
            <Col md={6}>
                <Input value={callSignInputText} onChange={(event) => {
                                   callSignSetInputText(event.target.value)
                }}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label sm={4}>SP Date Time Group</Label>
            <Col md={6}>
                <Input input value={spInputText} onChange={(event) => {
                                spSetInputText(event.target.value)
                }}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label sm={4}>Estimated RP Date Time Group</Label>
            <Col md={6}>
                <Input input value={rpInputText} onChange={(event) => {
                                     rpSetInputText(event.target.value)
                }}/>
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label sm={4}>Command Post Location</Label>

            <Col md={6}>
                <div className= "form-row flex-nowrap">
                <Input className="ml-1 col-sm-1" maxLength={3} placeholder = "10T" value = {gridMod1} onChange={(event) => {
                                     setGridMod1(event.target.value)}}/>
                <Input className="ml-4 col-sm-1" maxLength={2} placeholder = "ET" value = {gridMod2} onChange={(event) => {
                                     setGridMod2(event.target.value)}}/>
                <Input className="ml-4 col-sm-2" maxLength={5} placeholder = "01234" value={cpInputText} onChange={(event) => {
                                        cpSetInputText(event.target.value)}}/>
                <Input className="ml-4 col-sm-2" maxLength={5} placeholder = "56789" value = {cpInputTextUp} onChange={(event) => {
                                     cpSetInputTextUp(event.target.value)}}/>
                 </div>
            </Col>

        </FormGroup>

        <FormGroup row>
            <Label sm={4}>ETA to Continue Operations</Label>
            <Col md={6}>
                <Input value={etaInputText} onChange={(event) => {
                                     etaSetInputText(event.target.value)}}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label sm={4}>Sensitive Item Status</Label>
            <Col md={6}>
                <Input value={sensitiveInputText} onChange={(event) => {
                                     sensitiveSetInputText(event.target.value)}}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label sm={4}>One Sentence Narrative</Label>
            <Col md={6}>
                <Input value={narInputText} onChange={(event) => {
                                     narSetInputText(event.target.value)}}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label sm={4}>Contact Name and Phone Number</Label>
            <Col md={6}>
                <Input value={contactInputText} onChange={(event) => {
                                     contactSetInputText(event.target.value)}}/>
            </Col>

        </FormGroup>
        <FormGroup>
            <Button block size = "lg" type="submit" onClick={(e)=> {
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
                    pocInput: contactInputText,
                    archived: archivedSelect

                }

                sendBlue6s(Blue6formData).then( () => {
                    history.push("/")
                    // window.location.reload()
                })

            }}>
                submit
            </Button>
        </FormGroup>



    </Form>
)}