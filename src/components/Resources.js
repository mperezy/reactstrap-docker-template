import React from 'react';
import { Row, Col } from 'reactstrap';

const Resources = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h2>Check the <b><code>documentation</code></b>, are very useful!</h2>
                </Col>
            </Row>
            <b><a target={"blank"} href={'https://reactjs.org/docs/getting-started.html'}>React documentation</a></b>
            <br/>
            <b><a target={"blank"} href={'https://reactstrap.github.io'}>Reactstrap documentation</a></b>
        </div>
    );
};

export default Resources;