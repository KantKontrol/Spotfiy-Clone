import React from "react";
import "./index.css";
import LoginBar from "../LoginBar";
import LogoutBar from "../LogoutBar";
import { useAuth0 } from '@auth0/auth0-react';

import { Row, Col } from "react-bootstrap";

export default function NavHeader(){

    const { isAuthenticated } = useAuth0();

    return (
        <Row className="nav-header">
            <Col xs={8}>

            </Col>
            <Col xs={4}>
                { isAuthenticated ?  <LogoutBar /> : <LoginBar />}
                
            </Col>
        </Row>
    );
}