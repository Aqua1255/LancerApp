import Logo from "../Icons/Logo.svg";
import React from "react";
import {DisplayReportTable} from "./DisplayReportTable";
import {BaseMap} from "./BaseMap";
import background from './background.svg'


export const Homepage = () => {
    return(

<div style={{
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    // width: "100%",
    // height: "100%"
    top: "0",
    left: "0",

    /* Preserve aspet ratio */
    // minWidth: "100%",
    minHeight: "100%",
    backgroundSize: "100%"


}}>

    <img src={Logo} className="App-logo" alt="logo"/>
    <div className="display-table">
        <DisplayReportTable/>
    </div>

    <div className={"display-table"}>
        <BaseMap/>
    </div>

</div>
        )}