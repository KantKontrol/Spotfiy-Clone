import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";

import NavBar from "./components/NavBar";
import NavView from "./components/NavView";
import FriendsBar from "./components/FriendsBar";

import PlayBar from "./components/PlayBar";

function App() {
  return (
    <Container fluid>
      <Row>
          <NavBar />
          <NavView />
          <FriendsBar />
      </Row>
      <Row>
          <PlayBar />
      </Row>
    </Container>
  );
}

export default App;
