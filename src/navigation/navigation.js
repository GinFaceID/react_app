import React from 'react';
import { Navbar, Nav, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { SHOP_NAME } from '../constant';
import logo from '../asset/image/logo.png';
import './navigation.css';

export default class Navigation extends React.Component {
    navbar = { backgroundColor: '#F16E10 !important' };

    constructor(props) {
        super(props);

    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
          || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
          || (prevScrollpos <= 0 && currentScrollPos <= 0)
          ) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-5.0rem"; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
      }
    }
    }

        
    render() {
        return <Navbar id="navbar" className={"color-nav"} sticky="top" expand="md"  collapseOnSelect="true">
            <Navbar.Brand href={process.env.PUBLIC_URL}>
                <img
                    src={logo}
                    width="240"
                    height="40"
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