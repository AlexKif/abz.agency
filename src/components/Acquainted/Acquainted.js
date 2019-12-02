import React from 'react';
import './style.scss'
import {Col, Row} from "reactstrap";


function Acquainted(props) {
    return (
        <section className="acquainted">
            <div className="custom-container">
                <h3 className="headline acquainted__headline">Let's get acquainted</h3>
                    <div className="acquainted-content">
                        <Row>
                            <Col sm={4} className="acquainted__man-wrap">
                                <div className="acquainted__man">
                                    <img src="/images/acquainted/man-mobile.svg" alt="man"/>
                                </div>
                            </Col>
                            <Col sm={8}>
                                <div className="acquainted-content__text">
                                    <h4 className="sub-headline acquainted__sub-headline">I am cool frontend developer</h4>
                                    <p className="acquainted__text">When real users have a slow experience on mobile, they're much less
                                        likely to find what they are looking for or purchase from you in the
                                        future. For many sites this equates to a huge missed opportunity,
                                        especially when more than half of visits are abandoned if a mobile
                                        page takes over 3 seconds to load.
                                    </p>
                                    <p className="acquainted__text second-paragraph">Last week, Google Search and Ads teams announced two new
                                        speed initiatives to help improve user-experience on the web.
                                    </p>
                                    <button className="secondary-btn">Sign Up</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
            </div>
        </section>
    );
}

export default Acquainted;