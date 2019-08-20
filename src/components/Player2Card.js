import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import './Player2Card.css';

class Player2Card extends React.Component {
    state = {status: ''};

    renderContent() {
            return (
                <Card className="text-center tall noSidePadding  dropshadow" body inverse color={this.props.color}>
                    <CardBody className="title noSidePadding">
                        <CardText className="title">{this.props.category}</CardText>
                        <CardText className="text-center bigtext">{this.props.score}</CardText>
                    </CardBody>
                </Card>
            );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default Player2Card;