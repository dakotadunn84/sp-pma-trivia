import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import CategoryCard from './components/CategoryCard';
import { Container, CardDeck, Col } from 'reactstrap';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Container className="d-flex align-items-center">
        <Container>
          <CardDeck className="space">
              <Col xs="6" sm="4"><CategoryCard category="Apples" /></Col>
              <Col xs="6" sm="4"><CategoryCard category="Bananas" /></Col>
              <Col xs="6" sm="4"><CategoryCard category="Carrots" /></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard pointValue="100" question="Do apples have seeds?" answer="Yes" /></Col>
            <Col xs="6" sm="4"><QuestionCard pointValue="100" question="What color are bananas?" answer="Yellow" /></Col>
            <Col xs="6" sm="4"><QuestionCard pointValue="100" question="What color are carrots?" answer="Orange" /></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard pointValue="200" question="What type of plant do apples grow from?" answer="Tree" /></Col>
            <Col xs="6" sm="4"><QuestionCard pointValue="200" question="Which end of the banana is the right way to open it?" answer="The bottom" /></Col>
            <Col xs="6" sm="4"><QuestionCard pointValue="200" question="Do carrots grow from trees?" answer="No" /></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard pointValue="300" question="Does an apple a day keep the doctor away?" answer="Yes" /></Col>
            <Col xs="6" sm="4"><QuestionCard pointValue="300" question="How many bananas does Roger Harrington eat in a day?" answer="15" /></Col>
            <Col xs="6" sm="4"><QuestionCard pointValue="300" question="Does Bugs Bunny love carrots?" answer="Yes" /></Col>
          </CardDeck>
        </Container>
        </Container>
      </div>


    );
  }
}

export default App;
