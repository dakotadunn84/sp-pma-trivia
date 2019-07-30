import React from 'react';
import './QuestionCard.css';
import { Card, CardFooter, CardHeader, CardBody, CardText } from 'reactstrap';
import Modalmine from './Modal';


class QuestionCard extends React.Component {
    state = { status: `${this.props.statusFromApp}`};

    
    
    
    onInputClick = () => {
        this.props.updateCardStateFromApp(`${this.props.name}`)
        
        // if (this.state.status === 'start') {
        //     console.log(`${this.props.statusFromApp}`)
        //     this.setState({ status: 'question' })
        // }

        // if (this.state.status === 'question') {
        //     this.setState({ status: 'done' });
        //     // this.props.p1scoreupdate(this.props.pointValue)
        // }

        // Optional QuestionCard reset
        // if(this.state.status==='done'){

        //     this.setState({status:'start'})
        // }
    };
    componentDidUpdate(prevProps) {
        console.log("from component did update :" + this.state.status)
        if (this.props.statusFromApp !== prevProps.statusFromApp) {
            this.setState({ status: `${this.props.statusFromApp}`});
        }
           
    } 
    // componentDidMount() {
    //     console.log("from component did mount :" + this.state.status)
    //     this.setState({ status: `${this.props.statusFromApp}`})
    // }

    onP1ButtonClick = () => {
        this.props.p1scoreupdate(this.props.pointValue)

        // if (this.state.status === 'start') {
        //     this.setState({ status: 'question' })
        // }

        if (this.state.status === 'question') {
            this.setState({ status: 'done' });
            // this.props.p1scoreupdate(this.props.pointValue)
        }
    };
    onP2ButtonClick = () => {
        this.props.p2scoreupdate(this.props.pointValue)

        // if (this.state.status === 'start') {
        //     this.setState({ status: 'question' })
        // }

        if (this.state.status === 'question') {
            this.setState({ status: 'done' });
            // this.props.p1scoreupdate(this.props.pointValue)
        }
    };
    onNobodyClick = () => {

        // if (this.state.status === 'start') {
        //     this.setState({ status: 'question' })
        // }

        if (this.state.status === 'question') {
            this.setState({ status: 'done' });
            // this.props.p1scoreupdate(this.props.pointValue)
        }
    };

    truncatedQuestion = () => {
        let x = `${this.props.question}`

        return x.split("").length > 80 ? x.split("").slice(0, 80).join('') + "...": x ;
    };

    truncatedAnswer = () => {
        let x = `${this.props.answer}`

        return x.split("").length > 35 ? x.split("").slice(0, 35).join('') + "...": x ;
    };

    renderContent() {

        

        // console.log(this.props)
        if (this.state.status === "start") {
            // console.log(this.props)
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
                    <Modalmine category={this.props.category} question={this.props.question} pointValue={this.props.pointValue} answer={this.props.answer} funfact={this.props.funfact} questioncardP1ScoreUpdate={this.onP1ButtonClick} questioncardP2ScoreUpdate={this.onP2ButtonClick} onNobodyClick={this.onNobodyClick}></Modalmine>
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
                    <CardBody className="text-center d-flex align-items-center">
                        <CardText className="text-center wide block-ellipsis">{this.truncatedQuestion()}</CardText>
                    </CardBody>
                    <CardFooter className="text-muted">{this.truncatedAnswer()}</CardFooter>
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