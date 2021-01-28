import React, {useEffect, useState} from "react";
import {Blue6Data, getBlue6s} from "./Blue6API";
import './DisplayReportContainer.css';

export const DisplayReportTable = () => {

const [displayReport, setDisplayReport] = useState<Blue6Data[]>([]);

useEffect( () => {
    getBlue6s()
        .then((data) => {
            setDisplayReport(data);
        })
        .catch(() => {
            console.error('data transfer didnt work')
        })
},[]);

return (
<div>
<h2>Ongoing Training</h2>
<table>
    <div className= 'overflow'>
    <tr>
        <th>Reporting Date</th>
        <th>Unit & Call Sign</th>
        <th>SP Date Time Group</th>
        <th>Estimated RP Date Time Group</th>
        <th>Command Post Location</th>
        <th>ETA to Continue Operations</th>
        <th>Sensitive Item Status</th>
        <th>One Sentence Narrative</th>
        <th>Contact Name and Phone #</th>
    </tr>
    <tr>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.reportingDateInput}</div>)}
        </td>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.callSignInput}</div>)}
        </td>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.spDateInput}</div>)}
        </td>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.rpInput}</div>)}
        </td>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.locInput}</div>)}
        </td>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.etaInput}</div>)}
        </td>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.siInput}</div>)}
        </td>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.narInput}</div>)}
        </td>
        <td>
            {displayReport.map(blueSixData => <div>{blueSixData.pocInput}</div>)}
        </td>
    </tr>
    </div>

</table>
<div className= "tableContent">
    {/*{JSON.stringify(displayReport)}*/}
    {/*{displayReport[0]}*/}
    {/*{displayReport.map(blueSixData => (*/}
    {/*    {Blue6Data:blueSixData.reportingDateInput}))}*/}


</div>
</div>)

}



