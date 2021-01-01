import React from "react";
import "./index.css";
import { Col } from "react-bootstrap";

export default function NavView(props){

    return (
        <Col xs={8} className="nav-view-style">
            {props.children}
        </Col>
    );
}