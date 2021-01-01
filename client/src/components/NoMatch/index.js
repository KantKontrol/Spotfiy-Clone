import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function NoMatch(){


    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>Nothing to See Here!</Col>
                <Col></Col>
            </Row>
        </Container>
    );
}