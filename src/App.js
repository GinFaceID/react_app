import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './appRouter/appRouter';
import { Container, Row, Col } from 'react-bootstrap';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {WhatsappShareButton, WhatsappIcon} from 'react-share';

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
    <WhatsappShareButton
            url={"bit.ly/2mcMygY"}
            title={""}
            separator=":: "
            className="Demo__some-network__share-button"
            style={{position: 'fixed',
              right:25,
              bottom: 90,
              borderRadius: 30,
              boxShadow: "2px 3px 6px  #9E9E9E",
            backgroundColor:'#25D366'}}
          >
            <WhatsappIcon size={60} round />
          </WhatsappShareButton>
  </Container>
}

export default App;
