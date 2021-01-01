import React from "react";
import "./index.css";
import { Col, Row } from "react-bootstrap";
import LinkText from "../LinkText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
export default function NavBar(){


    return (
        <Col className="nav-style">
            <Row>
                <img className="logo-style" src="./assets/SpotifyCloned!.png" alt="Spotfy Cloned!"/>
            </Row>
            <Row>
                <Link to="/home">
                    <LinkText text="Home">
                        <FontAwesomeIcon icon={faHome} style={{marginRight: "5px"}}/>
                    </LinkText>
                </Link>
            </Row>
            <Row>
                <Link to="/search">
                    <LinkText text="Search">
                        <FontAwesomeIcon icon={faSearch} style={{marginRight: "5px"}}/>
                    </LinkText>
                </Link>
            </Row>
            <Row>
                <Link to="/library">
                    <LinkText text="Your Library">
                        <FontAwesomeIcon icon={faBook} style={{marginRight: "5px"}}/>
                    </LinkText>
                </Link>
            </Row>
        
        
        </Col>
    );
}