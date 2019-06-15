import React from 'react';
import './CategoryCard.css';
import { Card, CardBody, CardText } from 'reactstrap';


class CategoryCard extends React.Component {
    state = {status: ''};

    // onInputClick = () => {

    //     if(this.state.status==='start'){
    //         this.setState({status:'question'})
    //     }

    //     if(this.state.status==='question'){
    //         this.setState({status:'done'})
    //     }

    //     // Optional QuestionCard reset
    //     // if(this.state.status==='done'){
            
    //     //     this.setState({status:'start'})
    //     // }
    // };

    renderContent() {
        
            return (
                <Card className="text-center tall" >
                    <CardBody>
                        <CardText className="title">{this.props.category}</CardText>
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