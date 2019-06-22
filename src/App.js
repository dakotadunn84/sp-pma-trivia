import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import CategoryCard from './components/CategoryCard';
import Player2Card from './components/Player2Card';
import { Container, CardDeck, Col } from 'reactstrap';
import Categories from './Categories';

const catRandomizer = {
  cat1: 0,
  cat2: Math.floor(Math.random() * 10)
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        player1score: 0,
        player2score: 0
    };
    console.log( Categories[0])

    this.onP1ScoreUpdate = this.onP1ScoreUpdate.bind(this);
    this.onP2ScoreUpdate = this.onP2ScoreUpdate.bind(this);
    // this.catRandomizer = this.catRandomizer.bind(this);
}

  onP1ScoreUpdate(points) {
    this.setState({ player1score: this.state.player1score + points});
    console.log("Update Player 1 score by " + points + " points");
  }
  onP2ScoreUpdate(points) {
    this.setState({ player2score: this.state.player2score + points});
    console.log("Update Player 2 score by " + points + " points");
  }
  
  render() {
    return (
      <div className="App">
        <Col xs="6" sm="4" lg="2"><Player2Card category="Player 1" score={this.state.player1score} color="primary"/></Col>
        <Container className="d-flex align-items-center">
        <Container>
          <CardDeck className="space">
              <Col xs="6" sm="4"><CategoryCard category={Categories[0].category} /></Col>
              <Col xs="6" sm="4"><CategoryCard category="Bananas" /></Col>
              <Col xs="6" sm="4"><CategoryCard category="Carrots" /></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat1}`].category} pointValue={Categories[0].questions[0].pointvalue} question={Categories[0].questions[0].question} answer={Categories[0].questions[0].answer} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Bananas" pointValue={catRandomizer.cat2} question="What color are bananas?" answer="Yellow" funfact="Bananas are yellow because they make people happy" p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Carrots" pointValue={100} question="What color are carrots?" answer="Orange" p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category="Apples" pointValue={200} question="What type of plant do apples grow from?" answer="Tree" p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Bananas" pointValue={200} question="Which end of the banana is the right way to open it?" answer="The bottom" p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Carrots" pointValue={200} question="Do carrots grow from trees?" answer="No" p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category="Apples" pointValue={300} question="Does an apple a day keep the doctor away?" answer="Yes" p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Bananas" pointValue={300} question="How many bananas does Roger Harrington eat in a day?" answer="15" p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category="Carrots" pointValue={300} question="Does Bugs Bunny love carrots?" answer="Yes" p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
        </Container>
        </Container>
        <Col xs="6" sm="4" lg="2"><Player2Card category="Player 2" score={this.state.player2score} color="danger"/></Col>
      </div>


    );
  }
}

export default App;
