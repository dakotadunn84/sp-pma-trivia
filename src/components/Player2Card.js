import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

class Player2Card extends React.Component {
    state = {status: ''};

    renderContent() {
            return (
                <Card className="text-center tall" body inverse color={this.props.color}>
                    <CardBody>
                        <CardText className="title">{this.props.category}<br />{this.props.score}</CardText>
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