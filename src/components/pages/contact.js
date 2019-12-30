import React from "react";
import contactImage from "../../../static/assets/images/contact/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return(
        <div className = "contact-page-wrapper">
        <div 
        className = "left-column"
        style= {{
            background: "url(" + contactImage + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"

        }}
        />

        <div className = "right-column">
       <div className = "contact-bullet-points">
            <div className ="bullet-point-group">
                <div className = "icon">
                <FontAwesomeIcon icon="phone"/></div>
                <div className = "text">555-555-5555</div>
            </div>

            <div className ="bullet-point-group">
                <div className = "icon">
                <FontAwesomeIcon icon="map-pin"/></div>
                <div className = "text">Anywhere, UT</div>
            </div>

            <div className ="bullet-point-group">
                <div className = "icon">
                <FontAwesomeIcon icon="clock"/></div>
                <div className = "text">9AM - 5PM</div>
            </div>
       </div>
     
        </div>

    </div>
    );
}

