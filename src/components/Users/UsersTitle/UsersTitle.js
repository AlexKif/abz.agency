import React from 'react';
import {Col, Row} from "reactstrap";

function UsersTitle(props) {
    return (
        <Row>
            <Col>
                <div className="d-flex justify-content-center">
                    <h3>Our cheerful users</h3>
                </div>
            </Col>
        </Row>
    );
}

export default UsersTitle;