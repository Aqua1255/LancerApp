import React, {useEffect, useState} from "react";
import {archiveBlue6s, Blue6Data, getBlue6s} from "./Blue6API";
import './DisplayReportTable.css';
import {archiveBlue7s, Blue7Data, getBlue7s} from "./Blue7API";
import {Table} from "reactstrap";
import archive from "../Icons/archive.svg"


export const DisplayReportTable = () => {

const [displayReportBlue6, setDisplayReportBlue6] = useState<Blue6Data[]>([]);
const[displayReportBlue7, setDisplayReportBlue7] = useState<Blue7Data[]>([]);


useEffect( () => {
    getBlue6s()
        .then((data) => {
            setDisplayReportBlue6(data);
        })
        .catch(() => {
            console.error('blue6 data transfer didnt work')
        })
},[]);

useEffect(() => {
    getBlue7s()
        .then((data) => {
            setDisplayReportBlue7(data);

        })
        .catch(() => {
            console.error('blue7 data transfer didnt work')
        })
}, []);

return (
<div className="table-container">
        <h2>Active Training</h2>

    <Table className="table-center" striped>
        <div className="overflow">

        <thead>
        <tr>
            <th>Reporting Date Time Group</th>
            <th>Unit and Call Sign</th>
            <th>SP Date Time Group</th>
            <th>Estimated Date Time Group</th>
            <th>Command Post Location</th>
            <th>ETA to Continue Operations</th>
            <th>Sensitive Item Status</th>
            <th>One Sentence Narrative</th>
            <th>Contact Name and Phone #</th>
        </tr>

        <tbody>
        {displayReportBlue6.filter(i => i.archived === false).map((blueSixData) => {

            console.log('Here is my current Blue6 id ', blueSixData.id)
            return (
                <tr>
                    <td>
                        {blueSixData.reportingDateInput}
                    </td>
                    <td>
                        {blueSixData.callSignInput}
                    </td>
                    <td>
                        {blueSixData.spDateInput}
                    </td>
                    <td>
                        {blueSixData.rpInput}
                    </td>
                    <td>
                        {blueSixData.locInput}
                    </td>
                    <td>
                        {blueSixData.etaInput}
                    </td>
                    <td>
                        {blueSixData.siInput}
                    </td>
                    <td>
                        {blueSixData.narInput}
                    </td>
                    <td>
                        {blueSixData.pocInput}
                    </td>
                    <td>
                        {blueSixData.archived}
                    </td>
                    <td>

                        <button type = "submit" onClick={() => {
                            blueSixData.archived=true
                            archiveBlue6s({id: blueSixData.id, archived: true }).then(() =>{window.location.reload()})

                        }}>
                            <img alt = "archive" src={archive} style={{
                                width: "15px",
                                paddingTop: "4px"
                            }}/>
                        </button>
                    </td>

                </tr>
            )
        })  }

        </tbody>
        </thead>
        </div>

    </Table>

    <h2>Completed Training</h2>

    <Table striped className="table-center">
        <div className="overflow">
            <thead>
                <tr>
                    <th>Reporting Date Time Group</th>
                    <th>Unit and Call Sign</th>
                    <th>RP Date Time Group</th>
                    <th>Command Post Location</th>
                    <th>Accidents or SIGACTs</th>
                    <th>ETA to Continue Operations</th>
                    <th>Sensitive Item Status</th>
                </tr>
                <tbody>
                {displayReportBlue7.filter(i => i.archived === false).map((blueSevenData) => {
                        console.log('Here is my Blue7 data ', blueSevenData)
                    console.log('Here is my current Blue7 id ', blueSevenData.id)
                    return (
                    <tr>
                        <td>
                            {blueSevenData.checkOutReportingDateInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutCallSignInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutRpDateInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutLocInput}
                        </td>
                        <td>
                            {blueSevenData.accidentInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutEtaInput}
                        </td>
                        <td>
                            {blueSevenData.checkOutSiInput}
                        </td>
                        <td>
                            <button type = "submit" onClick={() => {
                                blueSevenData.archived=true
                                archiveBlue7s({id: blueSevenData.id, archived: true }).then(() =>{window.location.reload()})

                            }}>
                                <img alt = "archive" src={archive} style={{
                                    width: "15px",
                                    paddingTop: "4px"
                                }}/>
                            </button>


                        </td>

                    </tr>
                )
            })}
            </tbody>
        </thead>
        </div>
    </Table></div>


)}



