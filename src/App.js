import React, { Component } from 'react';
import { Table, Card, Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React + ReactStrap</h1>
                </header>
                <br/>
                <p className="App-intro">
                    This is a single template usign React and ReactStrap, a library that use React and Bootstrap 4
                    <br/>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <h2>A simple table using ReactStrap</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped bordered responsive>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Tony</td>
                                <td>Stark</td>
                                <td>@iamIronMan</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Steve</td>
                                <td>Rogers</td>
                                <td>@mrReferences</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Bruce</td>
                                <td>Banner</td>
                                <td>@peacefulMan</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Bruce</td>
                                <td>Wayne</td>
                                <td>@iamBatman</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Oliver</td>
                                <td>Queen</td>
                                <td>@iamTheGreenBatman</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
