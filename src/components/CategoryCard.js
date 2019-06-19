import React from 'react';
import './CategoryCard.css';
import { Card, CardBody, CardText, img } from 'reactstrap';

class CategoryCard extends React.Component {
    state = {status: ''};

    renderContent() {
            return (
                <Card className="text-center tall">
                    <CardBody>
                        <CardText className="title">{this.props.category}</CardText>
                        <img className="pic"/>
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