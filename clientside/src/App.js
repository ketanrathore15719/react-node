// import logo from './logo.svg';
import React from "react";
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faHome, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'
import {Navbar, Nav} from "react-bootstrap"

import Home from "./components/Home"
//import StudentList from "./components/StudentList"
import StudentCreate from "./components/StudentCreate"
import StudentListNew from "./components/StudentListNew"
import CreateStudent from "./components/CreateStudent"
import UpdateStudent from "./components/UpdateStudent"
import SearchStudent from "./components/SearchStudent"

function App() {

    return (
        <div className="App">
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Student Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link ><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/student/view"><FontAwesomeIcon icon={faList} /> Student List</Link></Nav.Link>
                            <Nav.Link ><Link to="/student/create"></Link></Nav.Link>
                            <Nav.Link ><Link to="/student/new/create"><FontAwesomeIcon icon={faPlus} /> Create New Student</Link></Nav.Link>
                            <Nav.Link ><Link to="/student/search"><FontAwesomeIcon icon={faSearch} /> Search</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Route exact path="/"> <Home /> </Route>
                
                <Route exact path="/student/view"> <StudentListNew /> </Route>

                <Route path="/student/create"> <StudentCreate /> </Route>

                <Route path="/student/new/create"> <CreateStudent /> </Route>

                <Route path="/student/edit/:id" render={props=>(<UpdateStudent {...props} /> )}> </Route>

                <Route path="/student/search"> <SearchStudent /> </Route>
            </Router>
        </div>
    );
}

export default App;
