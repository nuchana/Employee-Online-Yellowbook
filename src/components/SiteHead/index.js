import React from "react";
import "./style.css";

function SiteHead() {
    // a funciton to create sitehead
    return (
        <div className="wrapper">
            <div className="title">
                Employee Directory
            </div>
            <br></br>
            <div className="tagline">
                Employee Information for all employees anywhere anytime!
            </div>
        </div>
    );

}
export default SiteHead;