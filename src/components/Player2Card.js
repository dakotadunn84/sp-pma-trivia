import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import './Player2Card.css';

class Player2Card extends React.Component {
    state = {status: ''};

    renderContent() {
            return (
                <Card className="text-center tall" body inverse color={this.props.color}>
                    <CardBody className="title mt-0">
                        <CardText className="title">{this.props.category}</CardText>
                        <CardText className="title bigtext">{this.props.score}</CardText>
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