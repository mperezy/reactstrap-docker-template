import React from 'react';
import { Col, Row, Card, Container, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import ModalExample from './ModalExample';

const publicUrl = "../../";

const CardExample = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>A simple <b><code>Card</code></b> using ReactStrap</h2>
                </Col>
            </Row>
            <Row>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src={publicUrl + "images/html5.png"} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>HTML</CardTitle>
                            <CardSubtitle>Frontend</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <ModalExample buttonType={"HTML"}/>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={publicUrl + "images/react.png"} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>React</CardTitle>
                            <CardSubtitle>Frontend</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <ModalExample buttonType={"React"}/>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={publicUrl + "images/javascript.png"} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Javascript</CardTitle>
                            <CardSubtitle>Frontend & Backend (Node.js)</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <ModalExample buttonType={"Javascript"}/>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    );
};

export default CardExample;