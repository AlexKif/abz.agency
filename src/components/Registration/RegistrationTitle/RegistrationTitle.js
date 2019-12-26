import React from 'react';

import './style.scss'
import {Col, Row} from "reactstrap";

function RegistrationTitle(props) {
    return (
        <Row>
            <Col md={12}>
                <div className="usersTitle-wrap registration-title-wrap">
                    <h3 className="headline">Register to get a work</h3>
                    <p className="attention title-attention">Attention! After successful registration and alert,
                        update the list of users in the block from the top
                    </p>
                </div>
            </Col>
        </Row>
    );
}

export default RegistrationTitle;