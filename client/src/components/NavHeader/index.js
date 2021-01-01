import React from "react";
import "./index.css";
import LoginBar from "../LoginBar";

import { Row, Col } from "react-bootstrap";

export default function NavHeader(){

    return (
        <Row className="nav-header">
            <Col xs={8}>

            </Col>
            <Col xs={4}>
                <LoginBar />
            </Col>
        </Row>
    );
}