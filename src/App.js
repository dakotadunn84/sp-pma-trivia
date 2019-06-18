import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import CategoryCard from './components/CategoryCard';
import Player2Card from './components/Player2Card';
import { Container, CardDeck, Col } from 'reactstrap';


class App extends React.Component {
state={player1score: 0, player2score:100};

  onP1ScoreUpdate(points) {
    // this.setState({player1score: this.state.player1score + points});
    console.log("Update Player 1 score by " + points + " points");
  }
  onP2ScoreUpdate(points) {
    console.log("Update Player 2 score by " + points + " points");
  }

  render() {
    return (
      <div className="App">
        <Col xs="6" sm="4" lg="2"><Player2Card category="Player 1" score={this.state.player1score} color="primary"/></Col>
        <Container className="d-flex align-items-center">
        <Container>
          <CardDeck className="space">
              <Col xs="6" sm="4"><CategoryCard category="Apples" /></Col>
              <Col xs="6" sm="4"><CategoryCard category="Bananas" /></Col>
              <Col xs="6" sm="4"><CategoryCard category="Carrots" /></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category="Apples" pointValue="100" question="Do apples have seeds?" answer="Yes" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Bananas" pointValue="100" question="What color are bananas?" answer="Yellow" funfact="Bananas are yellow because they make people happy" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Carrots" pointValue="100" question="What color are carrots?" answer="Orange" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category="Apples" pointValue="200" question="What type of plant do apples grow from?" answer="Tree" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Bananas" pointValue="200" question="Which end of the banana is the right way to open it?" answer="The bottom" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Carrots" pointValue="200" question="Do carrots grow from trees?" answer="No" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category="Apples" pointValue="300" question="Does an apple a day keep the doctor away?" answer="Yes" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Bananas" pointValue="300" question="How many bananas does Roger Harrington eat in a day?" answer="15" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Carrots" pointValue="300" question="Does Bugs Bunny love carrots?" answer="Yes" p1scoreupdate={this.onP1ScoreUpdate} p2score={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
        </Container>
        </Container>
        <Col xs="6" sm="4" lg="2"><Player2Card category="Player 2" score={this.state.player2score} color="danger"/></Col>
      </div>


    );
  }
}

export default App;
