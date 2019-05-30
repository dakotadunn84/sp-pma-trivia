import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { Container, Row, Col } from 'reactstrap';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="6" sm="4"><QuestionCard /></Col>
            <Col xs="6" sm="4"><QuestionCard /></Col>
            <Col xs="6" sm="4"><QuestionCard /></Col>
          </Row>
          <Row>
            <Col xs="6" sm="4"><QuestionCard /></Col>
            <Col xs="6" sm="4"><QuestionCard /></Col>
            <Col xs="6" sm="4"><QuestionCard /></Col>
          </Row>
          <Row>
            <Col xs="6" sm="4"><QuestionCard /></Col>
            <Col xs="6" sm="4"><QuestionCard /></Col>
            <Col xs="6" sm="4"><QuestionCard /></Col>
          </Row>
        </Container>
      </div>


    );
  }
}

export default App;
