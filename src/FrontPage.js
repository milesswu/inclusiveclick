import React from 'react';
import './FrontPage.css';

class FrontPage extends React.Component {
    render() {
        return (
            <div id="parent">
                <div className="FrontPage">
                    <h2>
                        Welcome to click!
                    </h2>
                </div>

                <div className="FrontPage-Prof">
                    <p>placeholder</p>
                </div>
            </div>
        );
    }
}

export default FrontPage;