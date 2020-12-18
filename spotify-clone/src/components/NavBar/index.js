import React from "react";
import "./index.css";
import { Col, Row } from "react-bootstrap";
import LinkText from "../LinkText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBook } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){


    return (
        <Col className="nav-style">
            <Row>
                <img className="logo-style" src="./assets/SpotifyCloned!.png" alt="Spotfy Cloned!"/>
            </Row>
            <Row>
                <LinkText text="Home" url="loadHome">
                    <FontAwesomeIcon icon={faHome} style={{marginRight: "5px"}}/>
                </LinkText>
            </Row>
            <Row>
                <LinkText text="Search" url="loadHome">
                    <FontAwesomeIcon icon={faSearch} style={{marginRight: "5px"}}/>
                </LinkText>
            </Row>
            <Row>
                <LinkText text="Your Library" url="loadHome">
                    <FontAwesomeIcon icon={faBook} style={{marginRight: "5px"}}/>
                </LinkText>
                
            </Row>
        
        
        </Col>
    );
}