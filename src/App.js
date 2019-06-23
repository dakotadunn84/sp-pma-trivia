import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import CategoryCard from './components/CategoryCard';
import Player2Card from './components/Player2Card';
import { Container, CardDeck, Col } from 'reactstrap';
import Categories from './Categories';

const catRandomizer = {
  cat1: Math.floor(Math.random() * 6),
  cat2: Math.floor(Math.random() * 6),
  cat3: Math.floor(Math.random() * 6)
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
              <Col xs="6" sm="4"><CategoryCard category={Categories[`${catRandomizer.cat1}`].category} img={Categories[`${catRandomizer.cat1}`].image}/></Col>
              <Col xs="6" sm="4"><CategoryCard category={Categories[`${catRandomizer.cat2}`].category} img={Categories[`${catRandomizer.cat2}`].image}/></Col>
              <Col xs="6" sm="4"><CategoryCard category={Categories[`${catRandomizer.cat3}`].category} img={Categories[`${catRandomizer.cat3}`].image}/></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat1}`].category} pointValue={Categories[`${catRandomizer.cat1}`].questions[0].pointvalue} question={Categories[`${catRandomizer.cat1}`].questions[0].question} answer={Categories[`${catRandomizer.cat1}`].questions[0].answer} funfact={Categories[`${catRandomizer.cat1}`].questions[0].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat2}`].category} pointValue={Categories[`${catRandomizer.cat2}`].questions[0].pointvalue} question={Categories[`${catRandomizer.cat2}`].questions[0].question} answer={Categories[`${catRandomizer.cat2}`].questions[0].answer} funfact={Categories[`${catRandomizer.cat2}`].questions[0].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat3}`].category} pointValue={Categories[`${catRandomizer.cat3}`].questions[0].pointvalue} question={Categories[`${catRandomizer.cat3}`].questions[0].question} answer={Categories[`${catRandomizer.cat3}`].questions[0].answer} funfact={Categories[`${catRandomizer.cat3}`].questions[0].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat1}`].category} pointValue={Categories[`${catRandomizer.cat1}`].questions[1].pointvalue} question={Categories[`${catRandomizer.cat1}`].questions[1].question} answer={Categories[`${catRandomizer.cat1}`].questions[1].answer} funfact={Categories[`${catRandomizer.cat1}`].questions[1].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat2}`].category} pointValue={Categories[`${catRandomizer.cat2}`].questions[1].pointvalue} question={Categories[`${catRandomizer.cat2}`].questions[1].question} answer={Categories[`${catRandomizer.cat2}`].questions[1].answer} funfact={Categories[`${catRandomizer.cat2}`].questions[1].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat3}`].category} pointValue={Categories[`${catRandomizer.cat3}`].questions[1].pointvalue} question={Categories[`${catRandomizer.cat3}`].questions[1].question} answer={Categories[`${catRandomizer.cat3}`].questions[1].answer} funfact={Categories[`${catRandomizer.cat3}`].questions[1].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
          <CardDeck className="space">
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat1}`].category} pointValue={Categories[`${catRandomizer.cat1}`].questions[2].pointvalue} question={Categories[`${catRandomizer.cat1}`].questions[2].question} answer={Categories[`${catRandomizer.cat1}`].questions[2].answer} funfact={Categories[`${catRandomizer.cat1}`].questions[2].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat2}`].category} pointValue={Categories[`${catRandomizer.cat2}`].questions[2].pointvalue} question={Categories[`${catRandomizer.cat2}`].questions[2].question} answer={Categories[`${catRandomizer.cat2}`].questions[2].answer} funfact={Categories[`${catRandomizer.cat2}`].questions[2].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
            <Col xs="6" sm="4"><QuestionCard category={Categories[`${catRandomizer.cat3}`].category} pointValue={Categories[`${catRandomizer.cat3}`].questions[2].pointvalue} question={Categories[`${catRandomizer.cat3}`].questions[2].question} answer={Categories[`${catRandomizer.cat3}`].questions[2].answer} funfact={Categories[`${catRandomizer.cat3}`].questions[2].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate}/></Col>
          </CardDeck>
        </Container>
        </Container>
        <Col xs="6" sm="4" lg="2"><Player2Card category="Player 2" score={this.state.player2score} color="danger"/></Col>
      </div>


    );
  }
}

export default App;
