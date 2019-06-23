import React from 'react';
import './CategoryCard.css';
import { Card, CardBody, CardText, CardImg } from 'reactstrap';

class CategoryCard extends React.Component {
    state = {status: ''};

    renderContent() {
            return (
                <Card className="text-center tall">
                    <CardBody>
                        <CardText className="title">{this.props.category}</CardText>
                        <CardImg className="pic" src={require('../images/' + this.props.category + '.png')}/>
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

export default CategoryCard;