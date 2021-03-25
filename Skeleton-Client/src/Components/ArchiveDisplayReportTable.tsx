import React, {useEffect, useState} from "react";
import {archiveBlue6s, Blue6Data, deleteBlue6s, getBlue6s} from "./Blue6API";
import {archiveBlue7s, Blue7Data, deleteBlue7s, getBlue7s} from "./Blue7API";
import {Table} from "reactstrap";
import Delete from "../Icons/Delete.svg";
import unarchive from "../Icons/unarchive.svg"

export const ArchiveDisplayReportTable = () => {

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
            <h2>Archived Blue 6 Reports</h2>

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
                    {displayReportBlue6.filter(i => i.archived).map((blueSixData) => {




                        {/*{displayReportBlue6.map((blueSixData) => {*/}
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
                                    <button  type = "submit" onClick={(e) => {
                                        deleteBlue6s(blueSixData.id!).then(() => {window.location.reload()})

                                    }}>
                                        <img alt = "delete" src={Delete} style={{
                                            width: "15px"
                                        }}/>
                                    </button>
                                    <button type = "submit" onClick={() => {
                                        blueSixData.archived=false
                                        archiveBlue6s({id: blueSixData.id, archived: false }).then(() =>{window.location.reload()})
                                    }}>
                                        <img alt = "activate" src={unarchive} style={{
                                            width: "15px"
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

            <h2>Archived Blue 7 Reports</h2>

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
                    {displayReportBlue7.filter(i => i.archived).map((blueSevenData) => {
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
                                    <button  type = "submit" onClick={(e) => {
                                        deleteBlue7s(blueSevenData.id!)
                                        window.location.reload()
                                    }}>
                                        <img alt = "delete" src={Delete} style={{
                                            width:"15px"
                                        }}/>

                                    </button>
                                    <button type = "submit" onClick={() => {
                                        blueSevenData.archived=false
                                        archiveBlue7s({id: blueSevenData.id, archived: false }).then(() =>{window.location.reload()})
                                    }}>
                                        <img alt = "activate" src={unarchive} style={{
                                            width: "15px"
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