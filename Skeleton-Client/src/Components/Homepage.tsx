import Logo from "../Icons/Logo.svg";
import React from "react";
import {DisplayReportTable} from "./DisplayReportTable";
import {BaseMap} from "./BaseMap";

export const Homepage = () => {
    return(

<div>
    <img src={Logo} className="App-logo" alt="logo"/>
    <div className="display-table">
        <DisplayReportTable/>
    </div>

    <div className={"display-table"}>
        <BaseMap/>
    </div>
</div>
        )}