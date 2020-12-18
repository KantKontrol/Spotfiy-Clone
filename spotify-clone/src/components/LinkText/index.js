import React, { Children } from "react";
import "./index.css";

export default function LinkText(props){

    const {text, url} = props;

    return(
        <button className="link-text-style" >
            {props.children}
            {text}
        </button>
    );
}