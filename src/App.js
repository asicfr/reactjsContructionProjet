import React from 'react';
import { Navbar, Nav, NavItem, Grid, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Service Worker</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/calendrier">
              <NavItem eventKey={1}>Calendrier</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>

      <Grid>
        <Row className="show-grid">
          {props.children}
        </Row>
      </Grid>
    </div>
  );
};

export default App;
