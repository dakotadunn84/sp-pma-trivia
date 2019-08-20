import React from "react";
import {
  Card,
  CardBody,
  CardText,
  Button,
  Row,
  Col,
  Container
} from "reactstrap";
import "./Player2Card.css";

class Player2Card extends React.Component {
  state = { status: "" };

  renderContent() {
    return (
      <Card
        className="text-center tall noSidePadding  dropshadow"
        inverse
        color={this.props.color}
      >
        <CardBody className="title noSidePadding">
          <CardText className="title">{this.props.category}</CardText>
          <CardText className="text-center bigtext">
            {this.props.score}
          </CardText>
              <Container className="d-flex justify-content-between score-adjust-buttons">

                  <Button className="score-adjust-button" color={this.props.color} onClick={this.props.playerscorenegativeadjust}>
                    -
                  </Button>
                  <Button className="score-adjust-button" color={this.props.color} onClick={this.props.playerscorepositiveadjust}>
                    +
                  </Button>
              </Container>
        </CardBody>
      </Card>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Player2Card;
