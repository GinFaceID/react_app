import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { SHOP_NAME } from '../constant';
import logo from '../asset/image/logo.png';
import './navigation.css';

export default class Navigation extends React.Component {
    navbar = { backgroundColor: '#F16E10 !important' };
    render() {
        return <Navbar className="color-nav" expand="lg">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="270"
                    height="45"
                    className="d-inline-block align-top"
                    alt={SHOP_NAME}
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav style={{width:"100%"}}>
                    <Col md="12">
                    <Row>
                        <Col md={{offset:1, span:3}}>
                            <LinkContainer to="/">
                                <Nav.Link>Main</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col md={{span:3}}>
                            <LinkContainer to="/second">
                                <Nav.Link>SECOND</Nav.Link>
                            </LinkContainer></Col>

                    </Row>
                    </Col>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }

}