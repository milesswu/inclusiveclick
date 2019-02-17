import React from 'react';
import './ProfLogin.css'

class ProfLogin extends React.Component {
    render() {
        return (
            <div id="parent">
                <div className="Prof-Username">
                    <p>username</p>
                </div>
                <div className="Prof-Pass">
                    <p>password</p>
                </div>
            </div>
        );
    }
}

export default ProfLogin;