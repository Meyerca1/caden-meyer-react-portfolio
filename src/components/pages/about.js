import React from "react";
import bioPicture from "../../../static/assets/images/bio/bio-pic.jpg";

export default function() {
    return (

        <div className = "content-page-wrapper">
            <div 
            className = "left-column"
            style= {{
                background: "url(" + bioPicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"

            }}
            />

            <div className = "right-column">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typ
            </div>

        </div>
    );
}
