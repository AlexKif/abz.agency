import React from 'react';
import {Col, Row} from "reactstrap";

import './style.scss'

function UsersTitle(props) {
    return (
        <Row>
            <Col md={12}>
                <div className="usersTitle-wrap">
                    <h3 className="headline">Our cheerful users</h3>
                    <p className="attention">Attention! Sorting users by registration date</p>
                </div>
            </Col>
        </Row>
    );
}

export default UsersTitle;