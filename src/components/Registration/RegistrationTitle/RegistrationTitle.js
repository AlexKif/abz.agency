import React from 'react';

import './style.scss'
import {Col, Row} from "reactstrap";

function RegistrationTitle(props) {
    return (
        <Row>
            <Col md={12}>
                <div className="usersTitle-wrap registration-title-wrap registrat">
                    <h3 className="headline registration-headline">Register to get a work</h3>
                    <Row className="justify-content-center">
                        <Col md={7} lg={12}>
                            <p className="attention title-attention registration-sub-headline">Attention! After successful registration and alert,
                                update the list of users in the block from the top
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default RegistrationTitle;