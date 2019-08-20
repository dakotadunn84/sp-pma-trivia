import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import CategoryCard from './components/CategoryCard';
import Player2Card from './components/Player2Card';
import { Container, CardDeck, Col, Row, Button } from 'reactstrap';
import Categories from './Categories';

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = Categories;
shuffle(arr);



function ensureDifferentCategories(shuffledarr){
  var i;
  for (i = 0; i < shuffledarr.length - 2; i++) { 
    if (shuffledarr[i].category === shuffledarr[i+1].category) {
      shuffledarr.splice(i,1)
    }

    if (shuffledarr[i].category === shuffledarr[i+2].category) {
      shuffledarr.splice(i,1)
    }
  }
}
ensureDifferentCategories(arr);



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1score: 0,
      player2score: 0,
      cat1: 0,
      cat2: 1,
      cat3: 2,
      arrChecker: 6,
      cat1x100: 'start',
      cat2x100: 'start',
      cat3x100: 'start',
      cat1x200: 'start',
      cat2x200: 'start',
      cat3x200: 'start',
      cat1x300: 'start',
      cat2x300: 'start',
      cat3x300: 'start',
      gameStatus: 'inProgress'
    };

    this.onP1ScoreUpdate = this.onP1ScoreUpdate.bind(this);
    this.onP2ScoreUpdate = this.onP2ScoreUpdate.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  onP1ScoreUpdate(points) {
    this.setState({ player1score: this.state.player1score + points });
    console.log("Update Player 1 score by " + points + " points");
  }
  onP2ScoreUpdate(points) {
    this.setState({ player2score: this.state.player2score + points });
    console.log("Update Player 2 score by " + points + " points");
  }

  updateCardState = (name) => {
    console.log(name)
    var key = name
    var val = 'question'
    var obj  = {}
    obj[key] = val
    this.setState(obj)
  }

  newGame(){
    this.newGameNextCategories();
    this.newGameResetPoints();
    this.newGameResetQuestionCards();
  }

  newGameNextCategories = () => {
    // console.log(Categories[`${this.state.arrChecker}`])

    if (Categories[`${this.state.arrChecker}`] === undefined) {
      window.location.reload();
    };

    this.setState(prevState => ({arrChecker: prevState.arrChecker += 3}));
    this.setState(prevState => ({cat1: prevState.cat1 += 3}));
    this.setState(prevState => ({cat2: prevState.cat2 += 3}));
    this.setState(prevState => ({cat3: prevState.cat3 += 3}));
  }

  newGameResetPoints = () => {
    this.setState({ player1score: 0 });
    this.setState({ player2score: 0 });
  }

  newGameResetQuestionCards = () => {
    console.log("set question card status to start")
    this.setState({ cat1x100: 'start' });
    this.setState({ cat2x100: 'start' });
    this.setState({ cat3x100: 'start' });
    this.setState({ cat1x200: 'start' });
    this.setState({ cat2x200: 'start' });
    this.setState({ cat3x200: 'start' });
    this.setState({ cat1x300: 'start' });
    this.setState({ cat2x300: 'start' });
    this.setState({ cat3x300: 'start' }); 
  }

  render() {
    return (
      <div className="App">
        <Container className="containers" fluid={true}>
          <Row className="row justify-content-between h-100">
            <Col xs="6" sm="4" lg="2">
              <Player2Card category="Team 1" score={this.state.player1score} color="primary" />
            </Col>
            <Col lg="8">
              <CardDeck className="space">
                <Col xs="6" sm="4"><CategoryCard category={Categories[`${this.state.cat1}`].category} img={Categories[`${this.state.cat1}`].image} /></Col>
                <Col xs="6" sm="4"><CategoryCard category={Categories[`${this.state.cat2}`].category} img={Categories[`${this.state.cat2}`].image} /></Col>
                <Col xs="6" sm="4"><CategoryCard category={Categories[`${this.state.cat3}`].category} img={Categories[`${this.state.cat3}`].image} /></Col>
              </CardDeck>
              <CardDeck className="space">
                <Col xs="6" sm="4"><QuestionCard name="cat1x100" statusFromApp={`${this.state.cat1x100}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat1}`].category} pointValue={Categories[`${this.state.cat1}`].questions[0].pointvalue} question={Categories[`${this.state.cat1}`].questions[0].question} answer={Categories[`${this.state.cat1}`].questions[0].answer} funfact={Categories[`${this.state.cat1}`].questions[0].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
                <Col xs="6" sm="4"><QuestionCard name="cat2x100" statusFromApp={`${this.state.cat2x100}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat2}`].category} pointValue={Categories[`${this.state.cat2}`].questions[0].pointvalue} question={Categories[`${this.state.cat2}`].questions[0].question} answer={Categories[`${this.state.cat2}`].questions[0].answer} funfact={Categories[`${this.state.cat2}`].questions[0].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
                <Col xs="6" sm="4"><QuestionCard name="cat3x100" statusFromApp={`${this.state.cat3x100}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat3}`].category} pointValue={Categories[`${this.state.cat3}`].questions[0].pointvalue} question={Categories[`${this.state.cat3}`].questions[0].question} answer={Categories[`${this.state.cat3}`].questions[0].answer} funfact={Categories[`${this.state.cat3}`].questions[0].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
              </CardDeck>
              <CardDeck className="space">
                <Col xs="6" sm="4"><QuestionCard name="cat1x200" statusFromApp={`${this.state.cat1x200}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat1}`].category} pointValue={Categories[`${this.state.cat1}`].questions[1].pointvalue} question={Categories[`${this.state.cat1}`].questions[1].question} answer={Categories[`${this.state.cat1}`].questions[1].answer} funfact={Categories[`${this.state.cat1}`].questions[1].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
                <Col xs="6" sm="4"><QuestionCard name="cat2x200" statusFromApp={`${this.state.cat2x200}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat2}`].category} pointValue={Categories[`${this.state.cat2}`].questions[1].pointvalue} question={Categories[`${this.state.cat2}`].questions[1].question} answer={Categories[`${this.state.cat2}`].questions[1].answer} funfact={Categories[`${this.state.cat2}`].questions[1].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
                <Col xs="6" sm="4"><QuestionCard name="cat3x200" statusFromApp={`${this.state.cat3x200}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat3}`].category} pointValue={Categories[`${this.state.cat3}`].questions[1].pointvalue} question={Categories[`${this.state.cat3}`].questions[1].question} answer={Categories[`${this.state.cat3}`].questions[1].answer} funfact={Categories[`${this.state.cat3}`].questions[1].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
              </CardDeck>
              <CardDeck className="space">
                <Col xs="6" sm="4"><QuestionCard name="cat1x300" statusFromApp={`${this.state.cat1x300}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat1}`].category} pointValue={Categories[`${this.state.cat1}`].questions[2].pointvalue} question={Categories[`${this.state.cat1}`].questions[2].question} answer={Categories[`${this.state.cat1}`].questions[2].answer} funfact={Categories[`${this.state.cat1}`].questions[2].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
                <Col xs="6" sm="4"><QuestionCard name="cat2x300" statusFromApp={`${this.state.cat2x300}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat2}`].category} pointValue={Categories[`${this.state.cat2}`].questions[2].pointvalue} question={Categories[`${this.state.cat2}`].questions[2].question} answer={Categories[`${this.state.cat2}`].questions[2].answer} funfact={Categories[`${this.state.cat2}`].questions[2].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
                <Col xs="6" sm="4"><QuestionCard name="cat3x300" statusFromApp={`${this.state.cat3x300}`} updateCardStateFromApp={this.updateCardState} category={Categories[`${this.state.cat3}`].category} pointValue={Categories[`${this.state.cat3}`].questions[2].pointvalue} question={Categories[`${this.state.cat3}`].questions[2].question} answer={Categories[`${this.state.cat3}`].questions[2].answer} funfact={Categories[`${this.state.cat3}`].questions[2].funFact} p1scoreupdate={this.onP1ScoreUpdate} p2scoreupdate={this.onP2ScoreUpdate} /></Col>
              </CardDeck>
            </Col>
            <Col xs="6" sm="4" lg="2" className="d-flex flex-column">
              <Player2Card category="Team 2" score={this.state.player2score} color="danger" />
              <Col className="d-flex justify-content-end align-items-end">
                <Button className="dropshadow" onClick={this.newGame} >New Game</Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>


    );
  }
}

export default App;
