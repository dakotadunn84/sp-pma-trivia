/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import './Modal.css';

class Modalmine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    render() {
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}hello</Button> */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="justify-content-center text-center">{this.props.category}<br />{this.props.pointValue}<br /></ModalHeader>
                    <ModalBody className="text-center">
                        {this.props.question}
                        <Modal className="justify-content-center text-center" isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader className="justify-content-center text-center">{this.props.category}<br />{this.props.pointValue}</ModalHeader>
                            <ModalBody>{this.props.answer}</ModalBody>
                            <ModalFooter className="justify-content-center">
                                <Row className="justify-content-between footers">
                                    <Button color="primary" onClick={this.toggle}>Player 1</Button>
                                    <Button color="danger" onClick={this.toggle}>Player 2</Button>
                                </Row>
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                    <Button color="success" onClick={this.toggleNested}>Answer</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Modalmine;