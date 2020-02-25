import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './appRouter/appRouter';
import { Container, Row, Col } from 'react-bootstrap';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
  </Container>
}

export default App;
