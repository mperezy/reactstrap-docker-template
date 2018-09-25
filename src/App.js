import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

//Components
import Header from './components/Header';
import Message from './components/Message';
import CardExample from './components/CardExample';
import TableExample from './components/TableExample';
import FormExample from './components/FormExample';
import JumbotronExample from './components/JumbotronExample';
import Resources from './components/Resources';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header logo={logo}/>
                <br/>
                <Message />
                <br/>
                <TableExample/>
                <br/>
                <CardExample />
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <h2>A sample of <b><code>Forms</code></b> and <b><code>Jumbotron</code></b> grided with <b><code>Container</code></b>, <b><code>Row</code></b> and <b><code>Col</code></b> using ReactStrap</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col><FormExample /></Col>
                        <Col><JumbotronExample /></Col>
                    </Row>
                </Container>
                <br/>
                <Resources />
                <br/>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default App;
