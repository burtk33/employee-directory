import React from "react";
import {Navbar, Nav} from "react-bootstrap"
import {Form, FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap"

function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark" style={{padding: '15px'}}>
            <Navbar.Brand>Employee Directory</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link>Sort A-Z</Nav.Link>
            </Nav>
            <Form>
                <FormControl type="text" placeholder="Search Name" className="mr-sm-2" onChange={props.handleInputChange} />   
            </Form>
        </Navbar>
    );
}

export default NavBar;