import React, {Component} from 'react';
import TextTruncate from 'react-text-truncate';

import './style.scss'

class Banner extends Component {

    render() {
        const isMobile = window.innerWidth < 321;
        const showItems = isMobile ? 3 : 6;
        return (
            <section className="banner">
                <div className="custom-container">
                    <div className="banner-case ">
                        <h1 className="banner-case__headline">
                            Test assignment for Frontend Developer position
                        </h1>
                        <TextTruncate
                            className="banner-case__content"
                            line={showItems}
                            element="div"
                            truncateText=" ..."
                            text="We kindly remind you that your test assignment should be submitted
                        as a link to github bitbucket repository. Please be patient, we consider
                        and respond to every application that meets minimum requirements.
                        We look forward to your submission. Good luck!"
                        />
                        <button type="button" className="banner-case__login">Sign Up</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;