import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';

const TableExample = (props) => {
    return(
        <Container>
            <Row>
                <Col>
                    <h2>A simple <b><code>Table</code></b> using ReactStrap</h2>
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
    );
}

export default TableExample;