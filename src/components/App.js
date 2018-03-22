import React from "react";
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import Counter from '../containers/Counter';
import { Container, Row, Col, Card } from 'reactstrap';

// app component
export default class App extends React.Component {
    // render
    render() {
        return (
            <Container style={{padding: '1%'}}>
                <Card style={{padding: '1%'}}>
                    <Row>
                        <Col xs="5">
                        </Col>
                        <Col xs="2">
                            <Counter/>
                        </Col>
                        <Col xs="5">
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <AddCounter/>
                        </Col>
                        <Col xs="6">
                            <RemoveCounter/>
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    }
}
