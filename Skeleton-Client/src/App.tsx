// @ts-ignore
import React, {useState} from 'react';
import Logo from "./Logo.svg";
import './index.css'
import './App.css'
import {Blue6} from "./Blue6";
import {Blue7} from "./Blue7";
import {DisplayReportTable} from "./DisplayReportTable";
import {BaseMap} from "./BaseMap";


export const App = () => {

//Hook for Blue6/Blue7 Input Selection
    const [reportSelection, setReportSelection] = useState<number>(0);


    return (

        <div className="background-container">
            <header>
                <h1 className="body">
                    Lancer Brigade Operations Center
                </h1>
            </header>
            <img src={Logo} className="App-logo" alt="logo"/>

            <div className="form-container">
                {reportSelection === 1 && <Blue6/>}

                {reportSelection === 2 && <Blue7/>}



                {/*{reportSelection === 1 ? <Blue6/> :reportSelection ===2 ? <Blue7/> : null}*/}
                {/*<>*/}
                {/*    <button onClick={() =>setReportSelection(1)}>Initiate Training Event w/ Blue 6</button>*/}
                {/*    <button onClick={() => setReportSelection(2)}>Close-Out Training Event w/ Blue 7</button>*/}
                {/* </>*/}
                {/*<button onClick={() => setReportSelection(0)}>Main Menu</button>*/}

            </div>

            <div className="form-container">{reportSelection === 0 ?
                <>
                    <button onClick={() => setReportSelection(1)}>Initiate w/ Blue 6</button>
                    <button onClick={() => setReportSelection(2)}>Close-Out w/ Blue 7</button>
                </>
                :
                <button onClick={() => setReportSelection(0)} className="cancel-button">cancel</button>}
            </div>

            {reportSelection === 0 && (
                <div className="display-table">
                    <DisplayReportTable/>
                </div>
            )
            }
            <div className={"display-table"}>
                <BaseMap/>
            </div>
        </div>


    )
}
