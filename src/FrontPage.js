import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/prof-login'>Go to Prof Login</Link>
                </div>

            </div>
        );
    }
}

export default FrontPage;