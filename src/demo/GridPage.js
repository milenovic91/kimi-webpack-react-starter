import React from 'react';
import {Container, Row, Col} from './Layout';

const style = {
  border: '3px solid black'
};

export default function GridPage() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <div style={style}>One</div>
        </Col>
        <Col xs={12} sm={8}>
          <div style={style}>Two</div>
        </Col>
      </Row>
    </Container>
  );
}
