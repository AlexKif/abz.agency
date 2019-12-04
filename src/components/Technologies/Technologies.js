import React from 'react';

import './style.scss'
import {Col, Row} from "reactstrap";

function Technologies(props) {
    return (
        <section className="technologies">
            <div className="custom-container">
                <Row className="justify-content-center">
                    <Col sm={10} lg={7} xl={6}>
                        <h3 className="headline">About my relationships with web-development</h3>
                    </Col>
                </Row>
                <Row className="technologies-wrap">
                    <Col md={10} lg={4} className="technologies-box">
                        <div className="technologies-box__item">
                            <div className="technologies-box__item-wrap">
                                <img src="/images/technologies/html.svg"
                                     alt="html"
                                     className="technologies-box__item-wrap-img"/>
                            </div>
                            <div className="technologies-box__item-description">
                                <h4 className="sub-headline technologies-box__item-headline">I'm in love with HTML</h4>
                                <p className="technologies-box__item-text text-style">
                                    Hypertext Markup Language (HTML) is the standard markup
                                    language for creating web pages and web applications.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={10} lg={4} className="technologies-box">
                        <div className="technologies-box__item">
                            <div className="technologies-box__item-wrap">
                                <img src="/images/technologies/css.svg"
                                     alt="css"
                                     className="technologies-box__item-wrap-img"/>
                            </div>
                            <div className="technologies-box__item-description">
                                <h4 className="sub-headline technologies-box__item-headline">CSS is my best friend</h4>
                                <p className="technologies-box__item-text text-style">
                                    Cascading Style Sheets (CSS) is a style sheet language used for describing
                                    the presentation of a document written in a markup language like HTML.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={10} lg={4} className="technologies-box">
                        <div className="technologies-box__item">
                            <div className="technologies-box__item-wrap">
                                <img src="/images/technologies/javascript.svg"
                                     alt="js"
                                     className="technologies-box__item-wrap-img"/>
                            </div>
                            <div className="technologies-box__item-description">
                                <h4 className="sub-headline technologies-box__item-headline">JavaScript is my passion</h4>
                                <p className="technologies-box__item-text text-style">
                                    JavaScript is a high-level, interpreted programming language.
                                    It is a language which is also characterized as dynamic,
                                    weakly typed, prototype-based and multi-paradigm.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Technologies;