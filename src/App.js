import './App.css';
import React, { Component } from 'react';
// Three below are imports for my three components
import Header from './components/Header';
import Footer from './components/footer';
import Content from './components/Content';
// Importing style sheets
import 'bootstrap/dist/css/bootstrap.min.css';
// Three below are imports needed for the NavBar
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
// Importing react routing (DOM)
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

class App extends Component {
  render() {
    return (
      // Router tag surround the whole <div> element
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/* href will mirror the url. Ex- localhost:3000/read */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <br />

          <Switch>
            {/* path will tie to component ex- /create now calls/displays Header component // Edit now also added */}
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
            <Route path={"/edit/:id"} component={Edit}></Route> 
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
