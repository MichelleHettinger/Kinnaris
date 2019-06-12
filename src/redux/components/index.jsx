import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import {
  LoginHeader,
} from '../containers';


const App = () => (
  <Container id='topApp'>
    <Row>
      <Col sm={8}><h1>Kinnaris</h1></Col>
      <LoginHeader />
    </Row>
  </Container>
);

export default App;
