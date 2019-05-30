import React from 'react';
import { Card, CardFooter, CardBody,CardTitle, CardText } from 'reactstrap';


class QuestionCard extends React.Component {

    render() {
        return (
            <div>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle>Point Total</CardTitle>
                        <CardText>Question question question question question question question question question</CardText>
                    </CardBody>
                    <CardFooter className="text-muted">Answer</CardFooter>
                </Card>
            </div>
        );
    }
}

export default QuestionCard;