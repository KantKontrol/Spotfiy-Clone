import React from "react";
import "./index.css";

export default function LinkText(props){

    const {text} = props;

    return(
        <button className="link-text-style" >
            {props.children}
            {text}
        </button>
    );
}