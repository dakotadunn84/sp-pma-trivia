import React from "react";
import {
  Card,
  CardBody,
  CardText,
  Button,
  Container
} from "reactstrap";
import "./PlayerCard.css";

class PlayerCard extends React.Component {
  state = { status: "" };

  renderContent() {
    let className = "text-center noSidePadding  dropshadow";
        if (this.props.isSelected) {
          className += ' selected';
        }
    
    return (
      
      
      <Card
        className={className}
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
                  <Button className="score-adjust-button" color={this.props.color} onClick={this.props.togglePlayerTurn}>
                     
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

export default PlayerCard;
