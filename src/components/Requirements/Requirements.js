import React from 'react';

import './style.scss';
import {Col, Row} from "reactstrap";

function Requirements(props) {
    return (
        <section className="requirements">
            <div className="custom-container">
                <Row className="justify-content-center">
                    <Col md={7} lg={9}>
                        <h3 className="headline requirements__headline">General requirements for the test task</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="requirements-img">
                            <div className="requirements-img-wrap"></div>
                        </div>
                    </Col>
                    <Col md={6} className="requirements-content">
                        <div className="requirements-content-wrap">
                            <p className="text-style requirements-content__paragraph">
                                Users want to find answers to their questions quickly and data shows
                                that people really care about how quickly their pages load. The Search
                                team announced speed would be a ranking signal for desktop searches in
                                2010 and as of this month (July 2018), page speed will be a ranking factor
                                for mobile searches too.
                            </p>
                            <p className="text-style requirements-content__paragraph">
                                If you're a developer working on a site, now is a good time to evaluate
                                your performance using our speed tools. Think about how performance affects
                                the user experience of your pages and consider measuring a variety of real-world
                                user-centric performance metrics.
                            </p>
                            <p className="text-style requirements-content__paragraph">
                                Are you shipping too much JavaScript? Too many images? Images and JavaScript
                                are the most significant contributors to the page weight that affect page load
                                time based on data from HTTP Archive and the Chrome User Experience
                                Report - our public dataset for key UX metrics as experienced by Chrome
                                users under real-world conditions.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Requirements;