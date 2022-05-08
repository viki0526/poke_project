import React, {Component} from "react";
import {Nav, Navbar } from "react-bootstrap";

export default class NavBar extends Component{
    render() {
        const Pages = () => {
            return(
                <>
                    <Nav className="mr-auto">
                        <Nav.Link href="./Home">Home</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="./Wild">Catch Pokemon</Nav.Link>
                    </Nav>
                </>
            )
        }
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Pokemon App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Pages />
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    };
} 