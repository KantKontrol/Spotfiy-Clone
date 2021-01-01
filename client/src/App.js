import React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import NavView from "./components/NavView";
import Home from "./pages/Home";
import Search from "./pages/Search";
import YourLibrary from "./pages/YourLibrary";
import NoMatch from "./components/NoMatch";


import FriendsBar from "./components/FriendsBar";
import PlayBar from "./components/PlayBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Container fluid>
            <Row>
                <NavBar />
                  <NavView>
                      <Home />
                  </NavView>
                <FriendsBar />
            </Row>
            <Row>
                <PlayBar />
            </Row>
          </Container>
        </Route>
        <Route path="/search">
          <Container fluid>
            <Row>
                <NavBar />
                  <NavView>
                      <Search />
                  </NavView>
                <FriendsBar />
            </Row>
            <Row>
                <PlayBar />
            </Row>
          </Container>
        </Route>
        <Route path="/library">
          <Container fluid>
            <Row>
                <NavBar />
                  <NavView>
                      <YourLibrary />
                  </NavView>
                <FriendsBar />
            </Row>
            <Row>
                <PlayBar />
            </Row>
          </Container>
        </Route>
        <Route exact path="/">
          <Container fluid>
              <Row>
                  <NavBar />
                    <NavView>
                        <Home />
                    </NavView>
                  <FriendsBar />
              </Row>
              <Row>
                  <PlayBar />
              </Row>
            </Container>    
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
