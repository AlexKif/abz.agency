import React from 'react';
import {Col, Row} from "reactstrap";
import TextTruncate from "react-text-truncate";

import './style.scss'

function User(props) {
    const isAllUsers = props.totalUsers === props.users.length;
    return (
        <div className="user-flow">
            <Row className="">
                {props.users && props.users.map((user, index) => (
                    <Col key={index} sm={12} md={4} className="user-item">
                        <div className="user-container">
                            <div className="user__photo">
                                <img src={user.photo} alt="user"/>
                            </div>
                            <div className="user-information">
                                <TextTruncate
                                    className="user-information__name"
                                    line={2}
                                    element="h5"
                                    truncateText=" ..."
                                    text={user.name}
                                />
                                <p className="user-information__rank user-information__item">{user.position}</p>
                                <TextTruncate
                                    className="user-information__email user-information__item"
                                    line={1}
                                    element="div"
                                    truncateText=" ..."
                                    text={user.email}
                                />
                                <p className="user-information__phone user-information__item">{user.phone}</p>
                            </div>
                        </div>
                    </Col>
                ))}
                <Col md={12} className="d-flex justify-content-center">
                    <button disabled={isAllUsers}
                            className={isAllUsers ? "d-none": "secondary-btn-with-border"}
                            onClick={props.showMoreUsers}>Show more</button>
                </Col>
            </Row>
        </div>
    );
}

export default User;

// "secondary-btn-with-border"
