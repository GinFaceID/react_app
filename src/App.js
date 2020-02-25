import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './appRouter/appRouter';
import { Container, Row, Col, Image } from 'react-bootstrap';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import whatsappIcon from './asset/image/whatsapp_icon.png';

function App() {
  return <Container>
    <Row>
      <Col >
        <AppRouter className="offset-md-2 col-md-8" />
      </Col>
    </Row>
    <MessengerCustomerChat
      pageId="2025900314121570"
      appId="638776666894882"
      themeColor="#EAD7C3"
    />
    
    <a href="https://bit.ly/2mcMygY"
            style={{position: 'fixed',
              right:25,
              bottom: 90,
              borderRadius: 30,
              boxShadow: "2px 3px 6px  #9E9E9E"}}
          >
            <Image style={{width:60, height:60}} src={whatsappIcon} roundedCircle />
          </a>
  </Container>
}

export default App;
