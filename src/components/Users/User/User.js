import React from 'react';
import {Col, Row} from "reactstrap";

function User(props) {
    return (
        <Row>
            {props.users.users && props.users.users.map((user, index) => (
                <Col key={index} sm={12}>
                    <div className="user-container">
                        <div className="user__photo">
                            <img src={user.photo} alt="user"/>
                        </div>
                        <div className="user-information">
                            <h5 className="user-information__name">{user.name}</h5>
                            <p className="user-information__rank user-information__item">{user.position}</p>
                            <p className="user-information__email user-information__item">{user.email}</p>
                            <p className="user-information__phone user-information__item">{user.phone}</p>
                        </div>
                    </div>
                </Col>
            ))}
            <button>Show more</button>
        </Row>
    );
}

export default User;


