import React from 'react';
import './QuestionCard.css';
import { Card, CardFooter, CardHeader, CardBody, CardText } from 'reactstrap';
import Modalmine from './Modal';


class QuestionCard extends React.Component {
    state = { status: 'start' };

    onInputClick = () => {

        if (this.state.status === 'start') {
            this.setState({ status: 'question' })
        }

        if (this.state.status === 'question') {
            this.setState({ status: 'done' })
        }

        // Optional QuestionCard reset
        // if(this.state.status==='done'){

        //     this.setState({status:'start'})
        // }
    };

    renderContent() {
        if (this.state.status === "start") {
            return (
                <Card className="text-center tall" >
                    <CardBody>
                        <CardText className="start">{this.props.pointValue}</CardText>
                    </CardBody>
                </Card>
            );
        }

        if (this.state.status === "question") {
            return (
                <div>
                    <Modalmine category={this.props.category} question={this.props.question} pointValue={this.props.pointValue} answer={this.props.answer}></Modalmine>
                    <Card className="text-center tall" >
                        <CardBody>
                            <CardText className="start">{this.props.pointValue}</CardText>
                        </CardBody>
                    </Card>
                </div>

            );
        }

        if (this.state.status === "done") {
            return (
                <Card className="text-center done tall" >
                    <CardHeader>{this.props.pointValue}</CardHeader>
                    <CardBody className="d-flex align-items-center">
                        <CardText className="wide">{this.props.question}</CardText>
                    </CardBody>
                    <CardFooter className="text-muted">{this.props.answer}</CardFooter>
                </Card>
            );
        }


    }

    render() {
        return (
            <div onClick={this.onInputClick}>
                {this.renderContent()}
            </div>
        );
    }
}

export default QuestionCard;